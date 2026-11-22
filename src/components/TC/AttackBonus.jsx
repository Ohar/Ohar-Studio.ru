import React from "react"
import declint from "declint-ru"

import { useLanguage } from "@/components/LanguageProvider"

const AttackBonus = ({ bonus }) => {
  const { language } = useLanguage()
  const bonusModal = Math.abs(bonus)
  const bonusText = bonus >= 0 ? `+ ${bonusModal}` : `− ${bonusModal}`
  const diceText =
    language === "ru"
      ? declint(bonusModal, ["КУБ", "КУБА", "КУБОВ"])
      : bonusModal === 1
        ? "DIE"
        : "DICE"

  return (
    <span>
      {bonusText} {diceText}
    </span>
  )
}

export default AttackBonus
