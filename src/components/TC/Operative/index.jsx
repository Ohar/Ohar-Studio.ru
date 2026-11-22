import React from "react"

import Ability from "@/components/TC/Ability"
import AttackBonus from "@/components/TC/AttackBonus"
import Cost from "@/components/TC/Cost"
import { useLanguage } from "@/components/LanguageProvider"
import Limit from "@/components/TC/Limit"

import { moveTypeCollection } from "@/constants/TC/move"
import operativeCollection from "@/constants/TC/operativeCollection"
import siteCopy from "@/constants/siteCopy"

const Operative = ({ id }) => {
  const { language } = useLanguage()
  const copy = siteCopy[language].tc
  const {
    abilityList,
    armour,
    attackRanged,
    attackMelee,
    baseSize,
    cost,
    equipmentText,
    flavour,
    keyList,
    limit,
    movementType,
    name,
    speed,
  } = operativeCollection[id]
  const titleId = `operative-${id}-title`

  return (
    <section className="Operative" aria-labelledby={titleId}>
      <header
        id={titleId}
        className="Operative_header"
        role="heading"
        aria-level="2"
      >
        <Limit limit={limit} />
        <span lang="en">{name}</span>
        <Cost cost={cost} />
      </header>

      {flavour ? (
        <blockquote className="Operative_flavour" lang="en">
          {flavour}
        </blockquote>
      ) : null}

      <table className="Operative_info" aria-labelledby={titleId}>
        <thead>
          <tr>
            <th
              scope="col"
              className="Operative_infoCell Operative_infoCell-head"
            >
              {copy.movement}
            </th>
            <th
              scope="col"
              className="Operative_infoCell Operative_infoCell-head"
            >
              {copy.ranged}
            </th>
            <th
              scope="col"
              className="Operative_infoCell Operative_infoCell-head"
            >
              {copy.melee}
            </th>
            <th
              scope="col"
              className="Operative_infoCell Operative_infoCell-head"
            >
              {copy.armour}
            </th>
            <th
              scope="col"
              className="Operative_infoCell Operative_infoCell-head"
            >
              {copy.base}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="Operative_infoCell">
              {speed}" {moveTypeCollection[language][movementType]}
            </td>
            <td className="Operative_infoCell">
              <AttackBonus bonus={attackRanged} />
            </td>
            <td className="Operative_infoCell">
              <AttackBonus bonus={attackMelee} />
            </td>
            <td className="Operative_infoCell">{armour}</td>
            <td className="Operative_infoCell">
              {baseSize} {copy.baseUnit}
            </td>
          </tr>
        </tbody>
      </table>

      {equipmentText ? (
        <section className="Operative_equipment">
          <header>{copy.equipment}</header>
          <div lang="en">{equipmentText}</div>
        </section>
      ) : null}

      <section className="Operative_abilities">
        <header>{copy.abilities}</header>
        {abilityList ? (
          <ul lang="en">
            {abilityList.map(({ name, text }) => (
              <li key={name}>
                <Ability name={name} text={text} />
              </li>
            ))}
          </ul>
        ) : (
          <p>{copy.none}</p>
        )}
      </section>

      <section className="Operative_keys">
        <header>{copy.keywords}</header>
        <p lang="en">{keyList.length ? keyList.join(", ") : "—"}</p>
      </section>
    </section>
  )
}

export default Operative
