const DEFAULT_LANGUAGE = "en"
const LANGUAGE_STORAGE_KEY = "ohar.language"
const SUPPORTED_LANGUAGES = ["en", "ru"]
const RUSSIAN_ONLY_PATH_PREFIXES = ["/articles", "/dw", "/quotes"]

const normalizeLanguage = (language) =>
  language ? language.toLowerCase().split("-")[0] : ""

const getPreferredLanguage = (browserLanguages) => {
  const normalizedLanguages = (browserLanguages || [])
    .map(normalizeLanguage)
    .filter(Boolean)
  const ruIndex = normalizedLanguages.indexOf("ru")
  const enIndex = normalizedLanguages.indexOf("en")

  return ruIndex !== -1 && (enIndex === -1 || ruIndex < enIndex)
    ? "ru"
    : DEFAULT_LANGUAGE
}

const isSupportedLanguage = (language) => SUPPORTED_LANGUAGES.includes(language)

const isLocalizedPath = (pathname) =>
  !RUSSIAN_ONLY_PATH_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  )

module.exports = {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  getPreferredLanguage,
  isLocalizedPath,
  isSupportedLanguage,
}
