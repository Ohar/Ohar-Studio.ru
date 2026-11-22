const assert = require("node:assert/strict")
const { spawn } = require("node:child_process")
const { existsSync } = require("node:fs")
const { mkdtemp, readFile, rm, stat } = require("node:fs/promises")
const { createServer } = require("node:http")
const { tmpdir } = require("node:os")
const path = require("node:path")
const test = require("node:test")

const outputDir = path.resolve(__dirname, "..", "out")

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    process.env.GOOGLE_CHROME_BIN,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ]

  const executable = candidates.find(
    (candidate) => candidate && existsSync(candidate)
  )
  assert.ok(executable, "Chrome or Chromium is required to test CV PDF output")
  return executable
}

async function resolvePublicFile(urlPath) {
  const pathname = decodeURIComponent(
    new URL(urlPath, "http://localhost").pathname
  )
  const relativePath = pathname.endsWith("/")
    ? `${pathname}index.html`
    : pathname
  const filePath = path.resolve(outputDir, `.${relativePath}`)

  if (!filePath.startsWith(`${outputDir}${path.sep}`)) {
    return null
  }

  try {
    const fileStats = await stat(filePath)
    return fileStats.isFile() ? filePath : null
  } catch {
    return null
  }
}

async function startStaticServer() {
  const server = createServer(async (request, response) => {
    const filePath = await resolvePublicFile(request.url)

    if (!filePath) {
      response.writeHead(404)
      response.end("Not found")
      return
    }

    response.writeHead(200, {
      "Content-Type":
        contentTypes[path.extname(filePath)] || "application/octet-stream",
    })
    response.end(await readFile(filePath))
  })

  await new Promise((resolve, reject) => {
    server.once("error", reject)
    server.listen(0, "127.0.0.1", resolve)
  })

  return server
}

function printToPdf(chrome, url, pdfPath, profilePath, acceptLanguage) {
  const args = [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--no-proxy-server",
    "--proxy-server=direct://",
    "--proxy-bypass-list=*",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=8000",
    `--lang=${acceptLanguage}`,
    `--accept-lang=${acceptLanguage}`,
    `--user-data-dir=${profilePath}`,
    `--print-to-pdf=${pdfPath}`,
    url,
  ]

  return new Promise((resolve, reject) => {
    const child = spawn(chrome, args, { stdio: ["ignore", "ignore", "pipe"] })
    let stderr = ""

    child.stderr.on("data", (chunk) => {
      stderr += chunk
    })
    child.once("error", reject)
    child.once("exit", (code) => {
      if (code === 0) {
        resolve()
        return
      }

      reject(new Error(`Chrome exited with code ${code}\n${stderr}`))
    })
  })
}

function countPdfPages(pdf) {
  const source = pdf.toString("latin1")
  return source.match(/\/Type\s*\/Page\b/g)?.length || 0
}

test(
  "both CV languages fit on one A4 PDF page",
  { timeout: 60_000 },
  async () => {
    assert.ok(
      existsSync(path.join(outputDir, "cv", "index.html")),
      "Build the site before running the CV PDF test"
    )

    const chrome = findChrome()
    const tempDir = await mkdtemp(path.join(tmpdir(), "ohar-cv-pdf-"))
    const server = await startStaticServer()

    try {
      const address = server.address()
      const url = `http://127.0.0.1:${address.port}/cv/`

      for (const language of ["en-US,en", "ru-RU,ru,en-US,en"]) {
        const safeLanguage = language.replaceAll(",", "-")
        const pdfPath = path.join(tempDir, `cv-${safeLanguage}.pdf`)
        const profilePath = path.join(tempDir, `chrome-profile-${safeLanguage}`)

        await printToPdf(chrome, url, pdfPath, profilePath, language)

        const pdf = await readFile(pdfPath)
        const pageCount = countPdfPages(pdf)

        assert.ok(
          pageCount > 0,
          `Could not determine the ${language} PDF page count`
        )
        assert.equal(
          pageCount,
          1,
          `Expected one ${language} PDF page, received ${pageCount}`
        )
      }
    } finally {
      await new Promise((resolve) => server.close(resolve))
      await rm(tempDir, { recursive: true, force: true })
    }
  }
)
