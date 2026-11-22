import React from "react"

import Icon from "@/components/Icon"
import { useLanguage } from "@/components/LanguageProvider"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import MenuLink from "@/components/MenuLink"

import getMenuList from "./constants/menuList"

const MenuComponent = ({ hideHomeLink, hideLanguageSwitcher = false }) => {
  const { language } = useLanguage()
  const menuList = getMenuList(language)

  return (
    <nav className="menu">
      <ul className="menu_list">
        {menuList
          .filter(({ url }) => !(hideHomeLink && url === "/"))
          .map(({ url, title, content, icon, hrefLang, languageBadge }) => (
            <li
              key={url}
              className={
                icon
                  ? "menu_list_item menu_list_item--explicit-icon"
                  : "menu_list_item"
              }
            >
              <MenuLink
                url={url}
                title={title}
                content={content}
                hrefLang={hrefLang}
              >
                <Icon icon={icon} />
                {content}
                {languageBadge ? (
                  <small className="menu_languageBadge">{languageBadge}</small>
                ) : null}
              </MenuLink>
            </li>
          ))}
        {hideLanguageSwitcher ? null : (
          <li className="menu_list_item menu_list_item--language">
            <LanguageSwitcher />
          </li>
        )}
      </ul>
    </nav>
  )
}

export default MenuComponent
