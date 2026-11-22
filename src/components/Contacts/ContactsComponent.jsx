import React from "react"
import { faNpm } from "@fortawesome/free-brands-svg-icons"

import Icon from "@/components/Icon"
import { useLanguage } from "@/components/LanguageProvider"

const contactList = [
  {
    url: "https://vk.com/place_your_ad_here",
    type: "vkontakte",
    text: "ВКонтакте",
    textEn: "VK",
  },
  {
    url: "https://moikrug.ru/ohar-43416",
    type: "moikrug",
    text: "Мой круг",
    textEn: "Moikrug",
  },
  {
    url: "https://pikabu.ru/@Ohar",
    type: "pikabu",
    text: "Пикабу",
    textEn: "Pikabu",
  },
  {
    url: "http://habrahabr.ru/users/ohar/",
    type: "habrahabr",
    text: "Хабрахабр",
    textEn: "Habr",
  },
  {
    url: "https://angel.co/pavel-lysenko",
    type: "angelco",
    text: "Angel.co",
  },
  {
    url: "https://www.f6s.com/ohar/",
    type: "f6s",
    text: "F6S",
  },
  {
    url: "https://foundryvtt.com/community/ohar",
    type: "foundryvtt",
    text: "Foundry VTT",
  },
  {
    url: "https://www.facebook.com/oharpage",
    type: "facebook",
    text: "Facebook",
  },
  {
    url: "https://github.com/Ohar",
    type: "github",
    text: "GitHub",
  },
  {
    url: "https://cursor.com/@ohar",
    type: "cursor",
    text: "Cursor",
  },
  {
    url: "https://linkedin.com/in/oharr",
    type: "linkedin",
    text: "LinkedIn",
  },
  {
    url: "https://www.npmjs.com/~ohar",
    type: "npm",
    text: (
      <React.Fragment>
        <Icon icon={faNpm} />
        NPM
      </React.Fragment>
    ),
  },
  {
    url: "https://www.paypal.me/ohar",
    type: "paypal",
    text: "PayPal",
  },
  {
    url: "https://www.producthunt.com/@ohar",
    type: "producthunt",
    text: "Product Hunt",
  },
  {
    url: "https://skillsnet.ru/users/5ac7838fd010617793e9d428",
    type: "skillsnet",
    text: "SkillsNet",
  },
  {
    url: "https://steamcommunity.com/id/ohar",
    type: "steam",
    text: "Steam",
  },
  {
    url: "https://t.me/Oharr",
    type: "telegram",
    text: "Telegram",
  },
  {
    url: "https://twitter.com/CommodusVoke",
    type: "twitter",
    text: "Twitter",
  },
  {
    url: "https://www.xing.com/profile/Pavel_Lysenko",
    type: "xing",
    text: "XING",
  },
  {
    url: "https://www.worldanvil.com/author/Ohar",
    type: "worldanvil",
    text: "World Anvil",
  },
  {
    url: "https://people.mozilla.org/p/ohar",
    type: "mozilla_people",
    text: "Mozilla People",
  },
  {
    url: "https://discordapp.com/users/177339467823185930",
    type: "discord",
    text: "Discord",
  },
].sort(({ type: A }, { type: B }) => (A > B ? 1 : -1))

// TODO: use here LinkList
const ContactsComponent = () => {
  const { language } = useLanguage()

  return (
    <ul className="contacts">
      {contactList.map(({ url, type, text, textEn }) => (
        <li key={url} className="contacts__item">
          <a
            href={url}
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={`contacts__item__contact contacts__item__contact--${type}`}
          >
            {language === "en" && textEn ? textEn : text}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ContactsComponent
