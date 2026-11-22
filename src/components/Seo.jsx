import Head from "next/head"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import PropTypes from "prop-types"

import packageInfo from "root/package.json"

const SITE_TITLE = "Ohar"
const PAGE_STYLESHEETS = {
  "/articles/funny-js/button-title": ["/styles/articles/button-title.css"],
  "/articles/rules": ["/styles/articles/rules/rules.css"],
  "/articles/rules/rules-html": [
    "/styles/articles/rules/print.css",
    "/styles/articles/rules/print-color.css",
  ],
  "/articles/rules/rules-html-bw": [
    "/styles/articles/rules/print.css",
    "/styles/articles/rules/print-bw.css",
  ],
  "/cv": ["/styles/cv.css"],
}

function Seo({ description, lang, meta, keywords, stylesheets, title }) {
  const router = useRouter()
  const metaDescription = description || packageInfo.description
  const resolvedTitle = title || SITE_TITLE
  const documentTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE
  const pageStylesheets =
    stylesheets.length > 0
      ? stylesheets
      : PAGE_STYLESHEETS[router.pathname] || []

  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang
    }
  }, [lang])

  return (
    <Head>
      <title>{documentTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={packageInfo.author} />
      <meta name="version" content={packageInfo.version} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="yandex-verification" content="ba53de7ab5a80fcc" />
      {keywords.length > 0 ? (
        <meta name="keywords" content={keywords.join(", ")} />
      ) : null}
      {meta.map((item, index) => (
        <meta
          key={`${item.name || item.property || "meta"}-${index}`}
          {...item}
        />
      ))}
      {pageStylesheets.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </Head>
  )
}

Seo.defaultProps = {
  description: "",
  keywords: [],
  lang: "",
  meta: [],
  stylesheets: [],
  title: "",
}

Seo.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  stylesheets: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

export default Seo
