import { Head, Html, Main, NextScript } from "next/document"
import React from "react"

import { isLocalizedPath } from "@/utils/language"

const Document = ({ __NEXT_DATA__ }) => {
  const language = isLocalizedPath(__NEXT_DATA__?.page || "/") ? "en" : "ru"

  return (
    <Html lang={language}>
      <Head>
        <link rel="icon" type="image/png" href="/adeptus-mechanicus.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
