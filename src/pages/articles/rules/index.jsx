import React from "react"
import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

// import RulesPdf from "./files/Rules.pdf"
// import RulesRtf from "./files/Rules.rtf"
// import RulesDoc from "./files/Rules.doc"

import RulesRawText from '@/components/RulesRawText'

export default () => (
  <Layout>
    <Seo title='Правила оформления текстов на русском языке'/>
    <section>
      <h1>Правила оформления текстов на&nbsp;русском языке</h1>
      <p>Краткая практичная выжимка из&nbsp;«Справочника издателя и&nbsp;автора» А.&nbsp;Э.&nbsp;Мильчина и
        Л.&nbsp;К.&nbsp;Чельцовой. </p>
      <p>Скомпонованы на&nbsp;1&thinsp;листе A4 специально для&nbsp;распечатки.</p>
      {/*<h2>Скачать правила (для печати)</h2>*/}
      {/*<ul>*/}
        {/*<li>*/}
        {/*  <Link to='/articles/rules/rules-html'>*/}
        {/*    HTML + CSS (цветная), 13&thinsp;КиБ*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to='/articles/rules/rules-html-bw'>*/}
        {/*    HTML + CSS (ч/б), 13&thinsp;КиБ*/}
        {/*  </Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a title="Правила оформления текстов на русском языке (PDF, 198 КиБ)"*/}
        {/*     href={RulesPdf}*/}
        {/*     download>*/}
        {/*    PDF, 198&thinsp;КиБ*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a title="Правила оформления текстов на русском языке (RTF, 204 КиБ)"*/}
        {/*     href={RulesRtf}*/}
        {/*     download>*/}
        {/*    RTF, 204&thinsp;КиБ*/}
        {/*  </a>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <a*/}
        {/*    href={RulesDoc}*/}
        {/*    download*/}
        {/*  >*/}
        {/*    DOC, 47&thinsp;КиБ*/}
        {/*  </a>*/}
        {/*</li>*/}
      {/*</ul>*/}
      <h2>Текст правил</h2>

      <article>
        <RulesRawText/>
      </article>
    </section>
  </Layout>
)
