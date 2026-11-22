import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import PageTitle from "@/components/PageTitle"
import OperativeList from "@/components/TC/OperativeList"
import Seo from "@/components/Seo"
import DwLayout from "@/components/DwLayout"
import siteCopy from "@/constants/siteCopy"

import {
  OPERATIVE_ARTILLERY_WITCHES,
  OPERATIVE_HERETIC_CHORISTER,
  OPERATIVE_HERETIC_DEATH_COMMANDO,
  OPERATIVE_HERETIC_LEGIONNAIRE_RANGED,
  OPERATIVE_HERETIC_LEGIONNAIRE_MELEE,
  OPERATIVE_HERETIC_PRIEST,
  OPERATIVE_HERETIC_TROOPER,
} from "@/constants/TC/operative_ids"

const TcPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].tc

  return (
    <DwLayout hideHeader={false}>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={["Trench Crusade", "Heretic Legion"]}
      />
      <PageTitle className="TcPage_title">{copy.heading}</PageTitle>
      <OperativeList
        idList={[
          OPERATIVE_HERETIC_PRIEST,
          OPERATIVE_HERETIC_DEATH_COMMANDO,
          OPERATIVE_HERETIC_CHORISTER,
          OPERATIVE_ARTILLERY_WITCHES,
          OPERATIVE_HERETIC_TROOPER,
          OPERATIVE_HERETIC_LEGIONNAIRE_RANGED,
          OPERATIVE_HERETIC_LEGIONNAIRE_MELEE,
        ]}
      />
    </DwLayout>
  )
}

export default TcPage
