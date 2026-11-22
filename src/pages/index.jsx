import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import siteCopy from "@/constants/siteCopy"

import ImgDeus from "@/images/deus.png"
import ImgEst from "@/images/est.png"
import ImgMachina from "@/images/machina.png"

const IndexPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].home

  return (
    <Layout hideHomeLink>
      <Seo description={copy.description} keywords={copy.keywords} />
      <h1 className="offset">{copy.heading}</h1>

      <article className="mechanicus">
        <h1 className="offset">Deus Mechanicus</h1>

        <section className="mechanicus__logo">
          <h1 className="offset">Omnissian</h1>
        </section>

        <section className="mechanicus__motto">
          <h1 className="offset">Deus est machina</h1>
          <img
            className="mechanicus__word"
            src={ImgDeus.src}
            alt="Deus"
            width={229}
            height={85}
          />
          <img
            className="mechanicus__word"
            src={ImgEst.src}
            alt="Est"
            width={173}
            height={85}
          />
          <img
            className="mechanicus__word"
            src={ImgMachina.src}
            alt="Machina"
            width={410}
            height={85}
          />
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage
