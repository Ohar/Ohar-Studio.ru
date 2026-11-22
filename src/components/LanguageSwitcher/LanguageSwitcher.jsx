import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import siteCopy from "@/constants/siteCopy"
import { SUPPORTED_LANGUAGES } from "@/utils/language"

const LanguageSwitcher = ({ className = "" }) => {
  const { canChangeLanguage, isHydrated, language, setLanguage } = useLanguage()

  if (!canChangeLanguage) {
    return null
  }

  const copy = siteCopy[language].languageSwitcher

  return (
    <div
      className={`LanguageSwitcher ${isHydrated ? "" : "LanguageSwitcher--pending"} ${className}`}
      role="group"
      aria-label={copy.label}
      aria-hidden={!isHydrated}
    >
      {SUPPORTED_LANGUAGES.map((item) => (
        <button
          key={item}
          className={
            item === language
              ? "LanguageSwitcher_button LanguageSwitcher_button--active"
              : "LanguageSwitcher_button"
          }
          type="button"
          aria-label={copy[item]}
          aria-pressed={item === language}
          disabled={!isHydrated}
          onClick={() => setLanguage(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
      <span className="LanguageSwitcher_status" aria-live="polite">
        {copy.label}: {copy[language]}
      </span>
    </div>
  )
}

export default LanguageSwitcher
