const assert = require("node:assert/strict")
const { readFile } = require("node:fs/promises")
const path = require("node:path")
const test = require("node:test")

const {
  getPreferredLanguage,
  isLocalizedPath,
} = require("../src/utils/language")

const outputDir = path.resolve(__dirname, "..", "out")

test("browser language priority selects Russian only above English", () => {
  assert.equal(getPreferredLanguage(["ru-RU", "en-US"]), "ru")
  assert.equal(getPreferredLanguage(["en-US", "ru-RU"]), "en")
  assert.equal(getPreferredLanguage(["de-DE", "ru-RU"]), "ru")
  assert.equal(getPreferredLanguage(["de-DE", "en-US"]), "en")
  assert.equal(getPreferredLanguage(["de-DE"]), "en")
  assert.equal(getPreferredLanguage([]), "en")
})

test("only explicitly excluded content sections remain Russian-only", () => {
  for (const pathname of [
    "/articles",
    "/articles/funny-js/",
    "/dw/",
    "/dw/alchemist/",
    "/quotes/",
    "/quotes/42/",
  ]) {
    assert.equal(isLocalizedPath(pathname), false, pathname)
  }

  for (const pathname of [
    "/",
    "/about/",
    "/cv/",
    "/portfolio/",
    "/tc/",
    "/missing/",
  ]) {
    assert.equal(isLocalizedPath(pathname), true, pathname)
  }
})

test("static HTML defaults to English only on localized pages", async () => {
  const pages = [
    ["index.html", "en", "Pavel Lysenko"],
    ["about/index.html", "en", "Elsewhere online"],
    ["portfolio/index.html", "en", "See your army before it hits the tabletop"],
    ["cv/index.html", "en", "Lead Frontend Developer"],
    ["tc/index.html", "en", "Trench Crusade: Heretic Legion"],
    ["404.html", "en", "This page does not exist"],
    ["articles/index.html", "ru", "Статьи"],
    ["dw/index.html", "ru", "Dungeon World"],
    ["dw/elf/index.html", "ru", "Эльф"],
    ["quotes/index.html", "ru", "Случайная цитата"],
    ["quotes/42/index.html", "ru", "Цитата №42"],
  ]

  for (const [relativePath, language, expectedText] of pages) {
    const html = await readFile(path.join(outputDir, relativePath), "utf8")

    assert.match(html, new RegExp(`<html[^>]+lang="${language}"`), relativePath)
    assert.ok(
      html.includes(expectedText),
      `${relativePath} must contain ${expectedText}`
    )
  }
})

test("localized metadata and Russian-only links are explicit", async () => {
  const home = await readFile(path.join(outputDir, "index.html"), "utf8")
  const about = await readFile(path.join(outputDir, "about/index.html"), "utf8")
  const notFound = await readFile(path.join(outputDir, "404.html"), "utf8")
  const portfolio = await readFile(
    path.join(outputDir, "portfolio/index.html"),
    "utf8"
  )

  assert.match(home, /property="og:title" content="Ohar"/)
  assert.doesNotMatch(about, /href="\/(?:articles|dw|quotes)\//)
  assert.match(notFound, /name="robots" content="noindex, follow"/)
  assert.match(portfolio, /property="og:title" content="Portfolio"/)
  assert.match(
    portfolio,
    /property="og:url" content="https:\/\/ohar\.name\/portfolio\/"/
  )
  assert.doesNotMatch(portfolio, /http-equiv="refresh"|name="robots"/)
})
