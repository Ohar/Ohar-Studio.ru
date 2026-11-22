import { Link } from "@/components/NextLink"
import React from "react"

import isOuterLink from "./utils/isOuterLink"

const MenuLinkComponent = ({ url, title, content, children, hrefLang }) =>
  isOuterLink(url) ? (
    <a
      className="MenuLink"
      href={url}
      hrefLang={hrefLang}
      title={title || content}
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      {children}
    </a>
  ) : (
    <Link
      className="MenuLink"
      to={url}
      hrefLang={hrefLang}
      title={title || content}
    >
      {children}
    </Link>
  )

export default MenuLinkComponent
