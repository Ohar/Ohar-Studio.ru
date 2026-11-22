const assert = require("node:assert/strict")
const { createHash } = require("node:crypto")
const fs = require("node:fs")
const path = require("node:path")

const root = path.resolve(__dirname, "..")
const output = path.join(root, "out")
const published = path.join(root, "assets", "site")
const manifestPath = path.join(root, ".static-publish.json")
const inputs = [
  "src",
  "public",
  "package.json",
  "yarn.lock",
  "next.config.js",
  "jsconfig.json",
  "scripts/prepare-static.cjs",
]

function filesIn(base, names) {
  return names.flatMap((name) => {
    const file = path.join(base, name)
    const info = fs.lstatSync(file)
    assert.ok(!info.isSymbolicLink(), `Unexpected symlink: ${file}`)
    return info.isDirectory()
      ? filesIn(base, fs.readdirSync(file).map((child) => `${name}/${child}`))
      : [name]
  }).sort()
}

function digest(base, files) {
  const hash = createHash("sha256")
  for (const name of files) {
    hash.update(name).update("\0").update(fs.readFileSync(path.join(base, name)))
  }
  return hash.digest("hex")
}

const sourceHash = digest(root, filesIn(root, inputs))

if (process.argv.includes("--check")) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  assert.equal(sourceHash, manifest.sourceHash, "Sources changed: run yarn build:publish")
  assert.equal(
    digest(published, filesIn(published, fs.readdirSync(published))),
    manifest.exportHash,
    "Published files changed: run yarn build:publish"
  )
  assert.deepEqual(
    fs.readFileSync(path.join(root, "index.html")),
    fs.readFileSync(path.join(published, "index.html")),
    "Root index.html must match the published homepage"
  )
  console.log("Published export matches its source and file fingerprints")
} else {
  for (const file of ["index.html", "404.html", "portfolio/index.html", "cv/index.html"]) {
    assert.ok(fs.statSync(path.join(output, file)).size > 0, `Missing export: ${file}`)
  }
  // Only replace the generated directory within this checkout's assets folder.
  assert.equal(path.dirname(published), path.join(root, "assets"))
  console.log(`Refreshing generated files in ${published}`)
  fs.rmSync(published, { recursive: true, force: true })
  fs.cpSync(output, published, { recursive: true })
  fs.copyFileSync(path.join(output, "index.html"), path.join(root, "index.html"))
  const files = filesIn(published, fs.readdirSync(published))
  fs.writeFileSync(manifestPath, JSON.stringify({
    sourceHash,
    exportHash: digest(published, files),
    files: files.length,
  }, null, 2) + "\n")
  console.log(`Prepared ${files.length} static files for the Git-based deploy helper`)
}
