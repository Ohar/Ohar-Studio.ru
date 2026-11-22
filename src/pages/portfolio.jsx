import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import Layout from "@/components/Layout"
import PageTitle from "@/components/PageTitle"
import Seo from "@/components/Seo"
import siteCopy from "@/constants/siteCopy"

import neonShiftHero from "@/images/portfolio/neon-shift-hero.png"
import rosteramaPreview from "@/images/portfolio/rosterama-army-preview.png"
import styles from "@/styles/portfolio.module.css"

const PortfolioPage = () => {
  const { language } = useLanguage()
  const copy = siteCopy[language].portfolio

  return (
    <Layout>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={copy.keywords}
        meta={[
          { property: "og:url", content: "https://ohar.name/portfolio/" },
          {
            property: "og:image",
            content: `https://ohar.name${neonShiftHero.src}`,
          },
          { property: "og:image:alt", content: copy.neonShift.imageAlt },
        ]}
      />
      <div className={styles.page}>
        <div className={styles.shell}>
          <div className={styles.intro}>
            <PageTitle className={styles.title}>{copy.title}</PageTitle>
            <p className={styles.subtitle}>{copy.lead}</p>
          </div>

          <section className={styles.hero} aria-labelledby="game-title">
            <div className={styles.copy}>
              <p className={styles.eyebrow}>{copy.neonShift.eyebrow}</p>
              <h2 className={styles.gameTitle} id="game-title">
                Neon <span>Shift</span>
              </h2>
              <p className={styles.lead}>{copy.neonShift.description}</p>
              <div
                className={styles.actions}
                role="group"
                aria-label={copy.neonShift.platformLabel}
              >
                <a
                  className={`${styles.button} ${styles.buttonVk}`}
                  href="https://vk.ru/app54660255"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.neonShift.playVk}
                </a>
                <a
                  className={`${styles.button} ${styles.buttonTelegram}`}
                  href="https://t.me/neon_shift_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.neonShift.playTelegram}
                </a>
                <a
                  className={`${styles.button} ${styles.buttonYandex}`}
                  href="https://yandex.ru/games/app/neon-shift-544710"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.neonShift.playYandex}
                </a>
              </div>
              <div className={styles.platforms} aria-hidden="true">
                <span>{copy.neonShift.vk}</span>
                <span>Telegram</span>
                <span>{copy.neonShift.yandex}</span>
              </div>
            </div>

            <figure className={styles.art}>
              <img
                src={neonShiftHero.src}
                alt={copy.neonShift.imageAlt}
                width={neonShiftHero.width}
                height={neonShiftHero.height}
              />
            </figure>
          </section>

          <section className={styles.projects} aria-labelledby="projects-title">
            <p className={styles.sectionKicker}>{copy.rosterama.eyebrow}</p>
            <h2 className={styles.sectionTitle} id="projects-title">
              {copy.rosterama.heading}
            </h2>
            <article className={styles.rosteramaCard}>
              <div className={styles.rosteramaCopy}>
                <h3 className={styles.rosteramaBrand}>
                  Rosterama<span>.ru</span>
                </h3>
                <p className={styles.rosteramaDescription}>
                  {copy.rosterama.description}
                </p>
              </div>
              <a
                className={`${styles.button} ${styles.buttonRosterama}`}
                href="https://rosterama.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.rosterama.open}
              </a>
              <figure className={styles.rosteramaPreview}>
                <img
                  src={rosteramaPreview.src}
                  alt={copy.rosterama.imageAlt}
                  width={rosteramaPreview.width}
                  height={rosteramaPreview.height}
                  loading="lazy"
                />
              </figure>
            </article>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
