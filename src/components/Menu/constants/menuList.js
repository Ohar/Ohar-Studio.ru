import React from "react"

import { faDAndD } from "@fortawesome/free-brands-svg-icons"
import { faDungeon } from "@fortawesome/free-solid-svg-icons"

import siteCopy from "@/constants/siteCopy"
import ImgLogo from "@/images/logo.png"

const getMenuList = (language) => {
  const copy = siteCopy[language].menu
  const russianOnlyBadge = language === "en" ? "RU" : null
  const russianOnlyTitle = (title) =>
    language === "en" ? `${title} (${copy.russianOnly})` : title

  return [
    {
      url: "/",
      title: copy.homeTitle,
      content: (
        <img
          className="MenuLink_img"
          src={ImgLogo.src}
          alt="Adeptus Mechanicus"
          width="48"
          height="48"
        />
      ),
    },
    {
      url: "https://github.com/Ohar/",
      title: copy.githubTitle,
      content: "GitHub",
    },
    {
      url: "/cv",
      title: copy.cvTitle,
      content: copy.cv,
    },
    {
      url: "/portfolio",
      title: copy.portfolioTitle,
      content: copy.portfolio,
    },
    {
      url: "/quotes",
      title: russianOnlyTitle(copy.quotesTitle),
      icon: "icon-quote-left",
      content: copy.quotes,
      hrefLang: "ru",
      languageBadge: russianOnlyBadge,
      isEnglishOnlyHidden: true,
    },
    {
      url: "/about",
      title: copy.contactsTitle,
      icon: "icon-torso",
      content: copy.contacts,
    },
    {
      url: "/articles",
      title: russianOnlyTitle(copy.articlesTitle),
      icon: "icon-doc-text",
      content: copy.articles,
      hrefLang: "ru",
      languageBadge: russianOnlyBadge,
      isEnglishOnlyHidden: true,
    },
    {
      url: "http://dm-stuff.ru",
      title: "Dungeons & Dragons",
      icon: faDAndD,
      content: "D&D",
      isEnglishOnlyHidden: true,
    },
    {
      url: "/dw",
      title: russianOnlyTitle("Dungeon World"),
      icon: faDungeon,
      content: "DW",
      hrefLang: "ru",
      languageBadge: russianOnlyBadge,
      isEnglishOnlyHidden: true,
    },
  ].filter(
    ({ isEnglishOnlyHidden }) => language !== "en" || !isEnglishOnlyHidden
  )
}

export default getMenuList
