import React from "react"
import declint from "declint-ru"

import { useLanguage } from "@/components/LanguageProvider"

const Cost = ({ cost }) => {
  const { language } = useLanguage()
  const ducatText =
    language === "ru"
      ? declint(cost, ["дукат", "дуката", "дукатов"])
      : cost === 1
        ? "ducat"
        : "ducats"

  return (
    <span>
      {cost} {ducatText}
    </span>
  )
}

export default Cost
