import React, { useEffect, useState } from "react"

import { useLanguage } from "@/components/LanguageProvider"
import Layout from "@/components/Layout"
import SEO from "@/components/Seo"
import siteCopy from "@/constants/siteCopy"

const CAT_API_URL = "https://api.thecatapi.com/v1/images/search?size=full"
const CAT_API_KEY = "e4410a4c-59e5-4664-9bc7-931f661c8b3d"

const NotFoundPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].notFound
  const [image, setImage] = useState({
    url: "",
    width: "auto",
    height: "auto",
  })

  useEffect(() => {
    fetch(CAT_API_URL, {
      headers: {
        "x-api-key": CAT_API_KEY,
      },
    })
      .then((res) => res.json())
      .then(([{ url, width, height }]) => {
        setImage({ url, width, height })
      })
      .catch(console.error)
  }, [])

  return (
    <Layout>
      <SEO
        title={copy.title}
        description={copy.description}
        meta={[{ name: "robots", content: "noindex, follow" }]}
      />
      <h1>{copy.heading}</h1>
      {image.url ? (
        <>
          <p>{copy.fallback}</p>
          <img
            alt={copy.imageAlt}
            height={image.height}
            src={image.url}
            width={image.width}
            style={{ maxWidth: "100vw", maxHeight: "100vh" }}
          />
        </>
      ) : null}
    </Layout>
  )
}

export default NotFoundPage
