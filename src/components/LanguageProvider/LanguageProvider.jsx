import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react"
import PropTypes from "prop-types"

import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getPreferredLanguage,
  isLocalizedPath,
  isSupportedLanguage,
} from "@/utils/language"

const LanguageContext = createContext({
  canChangeLanguage: true,
  isHydrated: false,
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
})

const useClientLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect

const getBrowserLanguages = () => {
  if (typeof navigator === "undefined") {
    return []
  }

  return navigator.languages?.length
    ? navigator.languages
    : [navigator.language]
}

const getStoredLanguage = () => {
  try {
    const language = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return isSupportedLanguage(language) ? language : null
  } catch {
    return null
  }
}

const LanguageProvider = ({ children, pathname = "/" }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE)
  const [isHydrated, setIsHydrated] = useState(false)
  const canChangeLanguage = isLocalizedPath(pathname)
  const language = canChangeLanguage ? selectedLanguage : "ru"

  useClientLayoutEffect(() => {
    setSelectedLanguage(
      getStoredLanguage() || getPreferredLanguage(getBrowserLanguages())
    )
    setIsHydrated(true)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = useCallback(
    (nextLanguage) => {
      if (!canChangeLanguage || !isSupportedLanguage(nextLanguage)) {
        return
      }

      setSelectedLanguage(nextLanguage)

      try {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
      } catch {
        // The selected language still applies for this session.
      }
    },
    [canChangeLanguage]
  )

  const value = useMemo(
    () => ({
      canChangeLanguage,
      isHydrated,
      language,
      setLanguage,
    }),
    [canChangeLanguage, isHydrated, language, setLanguage]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string,
}

export const useLanguage = () => useContext(LanguageContext)

export default LanguageProvider
