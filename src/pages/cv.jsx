import React from "react"

import { useLanguage } from "@/components/LanguageProvider"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import CvPhoto from "@/images/Pavel_Lysenko.jpg"

import { cvData, pageCopy } from "@/constants/cvData"

const linkProps = {
  target: "_blank",
  rel: "nofollow",
}

const languages = ["ru", "en"]

const ExternalLink = ({ href, children }) => (
  <a href={href} {...linkProps}>
    {children}
  </a>
)

const SmartLink = ({ href, external, children }) => {
  if (!href) {
    return children
  }

  return external ? (
    <ExternalLink href={href}>{children}</ExternalLink>
  ) : (
    <a href={href}>{children}</a>
  )
}

const Section = ({ title, className = "section", children }) => (
  <section className={className}>
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
)

const Hero = ({ data }) => (
  <header className="hero">
    <img className="photo" src={CvPhoto.src} alt={data.name} />
    <div>
      <div className="head-info">
        <h1>{data.name}</h1>
        <div className="headline">
          <p className="role">{data.role}</p>
          <div className="compensation" aria-label={data.salaryLabel}>
            {data.salaries.map((salary) => (
              <p className="salary" key={salary}>
                {salary}
              </p>
            ))}
          </div>
        </div>
      </div>
      <section className="summary" aria-label={data.summaryLabel}>
        {data.summary.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </section>
    </div>
  </header>
)

const TargetList = ({ items }) => (
  <div className="target-list">
    {items.map((item) => (
      <p className="target-item" key={item.label}>
        <strong>{item.label}</strong>
        {item.value}
      </p>
    ))}
  </div>
)

const Contacts = ({ title, contacts }) => (
  <Section title={title} className="contacts">
    <div className="target-list">
      {contacts.map((contact) => (
        <p className="target-item" key={contact.label}>
          <strong>{contact.label}</strong>{" "}
          <SmartLink href={contact.href} external={contact.external}>
            {contact.value}
          </SmartLink>
        </p>
      ))}
    </div>
  </Section>
)

const Target = ({ data }) => (
  <Section title={data.targetTitle}>
    <div className="target">
      <div>
        <h3>{data.targetRole}</h3>
        <TargetList items={data.targetItems} />
      </div>
    </div>
  </Section>
)

const Period = ({ screenDate, printDate, duration }) => (
  <div className="period">
    <strong>
      <span className="date-screen">{screenDate}</span>
      <span className="date-print">{printDate}</span>
    </strong>
    {duration}
  </div>
)

const Company = ({ entry }) => (
  <p className="company">
    {entry.company}
    {entry.companyUrl && (
      <>
        {" - "}
        <ExternalLink href={entry.companyUrl}>
          {entry.companyUrlText}
        </ExternalLink>
      </>
    )}
  </p>
)

const RoleList = ({ roles }) => (
  <div className="role-list">
    {roles.map((role) => (
      <div className="role-item" key={`${role.title}-${role.printDate}`}>
        <h4>{role.title}</h4>
        <p className="role-period">
          <span className="date-screen">{role.screenDate}</span>
          <span className="date-print">{role.printDate}</span>
        </p>
        {role.description.map((item) => (
          <p key={item}>{item}</p>
        ))}
        <p className="stack">{role.stack}</p>
      </div>
    ))}
  </div>
)

const ExperienceEntry = ({ entry, className = "entry" }) => (
  <article className={className}>
    <Period
      screenDate={entry.screenDate}
      printDate={entry.printDate}
      duration={entry.duration}
    />
    <div>
      <h3>{entry.title}</h3>
      <Company entry={entry} />
      {entry.roles ? (
        <RoleList roles={entry.roles} />
      ) : (
        <>
          {entry.description.map((item) => (
            <p key={item}>{item}</p>
          ))}
          <p className="stack">{entry.stack}</p>
        </>
      )}
    </div>
  </article>
)

const OldExperienceSummary = ({ summary }) => (
  <p className="old-experience-summary">
    <strong>{summary.title}</strong>
    {summary.text}
  </p>
)

const Experience = ({ data }) => (
  <Section title={data.experienceTitle}>
    {data.experience.map((entry) => (
      <ExperienceEntry
        entry={entry}
        key={`${entry.title}-${entry.printDate}`}
      />
    ))}
    <div className="compact-history">
      {data.compactExperience.map((entry) => (
        <ExperienceEntry
          entry={entry}
          key={`${entry.title}-${entry.printDate}`}
        />
      ))}
      <OldExperienceSummary summary={data.oldExperienceSummary} />
      {data.legacyExperience.map((entry) => (
        <ExperienceEntry
          entry={entry}
          className="entry print-legacy"
          key={`${entry.title}-${entry.printDate}`}
        />
      ))}
    </div>
  </Section>
)

const FactGrid = ({ items }) => (
  <div className="grid-two">
    {items.map((item) => (
      <p className="fact" key={item.title}>
        <strong>{item.title}</strong>
        {item.lines
          ? item.lines.map((line, index) => (
              <React.Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))
          : item.text}
      </p>
    ))}
  </div>
)

const Skills = ({ data }) => (
  <div className="skills-extra">
    <Section title={data.skillsTitle}>
      <div className="chips">
        {data.skills.map((skill) => (
          <span className="chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </Section>

    <Section title={data.additionalTitle}>
      <FactGrid items={data.additional} />
    </Section>
  </div>
)

const Projects = ({ title, projects }) => (
  <Section title={title}>
    <div className="project-grid">
      {projects.map((project) => (
        <p className="project-card" key={project}>
          {project}
        </p>
      ))}
    </div>
  </Section>
)

const CvDocument = ({ data }) => (
  <article className="page">
    <Hero data={data} />
    <Contacts title={data.contactsTitle} contacts={data.contacts} />
    <Target data={data} />
    <Experience data={data} />
    <Section title={data.educationTitle} className="section education-section">
      <FactGrid items={data.education} />
    </Section>
    <Skills data={data} />
    <Projects title={data.projectsTitle} projects={data.projects} />
  </article>
)

const CvPage = () => {
  const { isHydrated, language, setLanguage } = useLanguage()
  const copy = pageCopy[language]
  const data = cvData[language]

  return (
    <Layout className="CvPageLayout" hideLanguageSwitcher>
      <Seo
        title={copy.title}
        description={copy.description}
        stylesheets={["/styles/cv.css"]}
      />

      <section className="CvPage" data-language={language}>
        <div className="toolbar">
          <button
            className="export-button"
            type="button"
            onClick={() => {
              window.print()
            }}
          >
            {copy.print}
          </button>
          <div
            className={
              isHydrated
                ? "language-switcher"
                : "language-switcher language-switcher-pending"
            }
            role="group"
            aria-label={copy.language}
            aria-hidden={!isHydrated}
          >
            {languages.map((item) => (
              <button
                key={item}
                className={
                  item === language
                    ? "language-button language-button-active"
                    : "language-button"
                }
                type="button"
                aria-pressed={item === language}
                disabled={!isHydrated}
                onClick={() => setLanguage(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <CvDocument data={data} />
      </section>
    </Layout>
  )
}

export default CvPage
