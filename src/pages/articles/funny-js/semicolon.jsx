import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import ImgWasted from "@/images/wasted.jpg"

const content = `
      <h1>Точки с запятой</h1>

      <time dateTime="2016-02-20">20 февраля 2016 г.</time>

      <h2>Что не так?</h2>

      <p>Найдите ошибку в коде, не запуская его</p>

      <pre>
<code>let a = 5

(function() {
    alert(a)
  })()</code>
</pre>

      <h2>Почему так?</h2>

      <p><code>TypeError: 5 is not a function</code></p>

      <p>Пропущенная точка с запятой приводит к тому, что самовызываемая функция превращается в аргумент при
        выполнении числа <code>5</code> как функции.</p>

      <p>Это равноценно такой записи</p>

      <pre>
<code>let a = 5(function() {alert(a)})()</code>
</pre>

      <p><code>5</code> — примитив, его нельзя выполнить и из-за этого скрипт умирает.</p>

      <img src='${ImgWasted.src}'
           alt="ПОТРАЧЕНО"
           width="400"
           height="240"/>

        <h3>Корректная запись</h3>

        <pre>
<code>let a = 5;

(function() {
    alert(a)
  })();</code>
</pre>


        <h2>Что же делать?</h2>

        <p>Соблюдайте стиль кодирования и всегда ставьте точки с запятой и фигурные скобки.</p>
`

export default () => (
  <Layout>
    <Seo title='Точки с запятой'/>
    <article dangerouslySetInnerHTML={{ __html: content}}/>
  </Layout>
)
