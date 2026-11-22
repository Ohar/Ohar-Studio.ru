import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import ImgProst from "@/images/prost.jpeg"

const content = `
      <h1>Конструктор дат</h1>

      <time dateTime="2016-02-18">18 февраля 2016 г.</time>

      <h2>Что не так?</h2>

      <pre>
<code>String(new Date(2015, 0)) === String(new Date('2015-01')) // false</code>
</pre>

      <p>
        Первое января, которое создаётся конструктором <code>new Date</code> из нескольких аргументов не равно первому
        января, созданному конструктором <code>new Date</code> из строки в ISO-формате.
      </p>

      <h2>Почему так?</h2>

      <p>А что же создаётся в том и другом случае?</p>

      <pre>
<code>
String(new Date(2015, 0))   // "Thu Jan 01 2015 00:00:00 GMT+0300"
String(new Date('2015-01')) // "Thu Jan 01 2015 03:00:00 GMT+0300"
</code>
</pre>

      <p>Ух ты. Смещение часового пояса. Друг мой, а почему ж ты в одном случае учитываешься, а во втором — нет?</p>

      <p>Обратимся к документации, там наверняка есть логичное объяснение.</p>

      <blockquote>
        <p><b>Обратите внимание:</b> если функция <code>Date</code> вызывается в качестве конструктора с более
          чем одним аргументом, то указанные аргументы интерпретируются как локальное время. Если аргументы
          указывают время в <abbr
            title="Всеми́рное координи́рованное вре́мя (англ. Coordinated Universal Time, фр. Temps Universel Coordonné; UTC)">UTC</abbr>,
          используйте <code>new Date(Date.UTC(...))</code> с теми же аргументами.</p>
        <cite>© <a target="_blank" rel="nofollow"
                   href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date">MDN</a></cite>
      </blockquote>

      <h3>Иными словами</h3>

      <img src='${ImgProst.src}'
           alt="ПРОСТ))00))"
           width="345"
           height="346"/>

      <h2>Что же делать?</h2>

      <p>
        Читать документацию, работать с датами только одним из этих способов,
        либо черёз <a target="_blank" rel="nofollow" href="http://momentjs.com/">обёртки</a>.
      </p>
`

export default () => (
  <Layout>
    <Seo title='Конструктор дат new Date'/>
    <article dangerouslySetInnerHTML={{ __html: content}}/>
  </Layout>
)
