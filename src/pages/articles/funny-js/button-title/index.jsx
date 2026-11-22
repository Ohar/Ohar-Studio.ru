import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

export default () => (
  <Layout>
    <Seo title='Невидимый title у детей button'/>
    <article>
      <h1>Невидимый title у детей button</h1>

      <time dateTime="2016-12-28">28 декабря 2016 г.</time>

      <h2>Что не так?</h2>

      <p>Невероятно тупой вопрос: <q>Всегда ли отображается атрибут <code>title</code> у видимых html-элементов?</q>
      </p>

      <p>Ответ, ожидаемо: <q>Нет, не всегда</q>. Например, его не хочет отображать Firefox для вложенных
        в <code>button</code>
        элементов.</p>

      <h3>Пример</h3>

      <h4>Код</h4>
      <p><code>&lt;button&gt;&lt;span title=&quot;bar&quot;&gt;foo&lt;/span&gt;&lt;/button&gt;</code></p>

      <h4>Элемент</h4>
      <p>
        <button><span title="foo">bar</span></button>
      </p>

      <h2>Почему так?</h2>

      <p>А это просто-напросто
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://bugzilla.mozilla.org/show_bug.cgi?id=183113&GoAheadAndLogIn=1">баг</a>,
        открытый ещё в 2002 году.</p>

      <h3>А что говорит спецификация?</h3>

      <blockquote>
        The title attribute represents advisory information for the element, such as would be appropriate for a
        tooltip
        <cite>
          <a href="https://www.w3.org/TR/2011/WD-html5-20110405/elements.html#the-title-attribute"
             target="_blank"
             rel="nofollow noopener noreferrer">W3C</a>
        </cite>
      </blockquote>

      <blockquote>
        The title global attribute contains a text representing advisory information related to the element it
        belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
        <cite>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title"
             target="_blank"
             rel="nofollow noopener noreferrer">MDN</a>
        </cite>
      </blockquote>

      <p>То есть <code>title</code> — штука справочная и не особо-то и обязательная. Скорее всего поэтому баг и висит
        уже 14 лет.</p>

      <h2>Что же делать?</h2>

      <p>Всё не так плохо, можно нагло заменять <code>title</code> псевдоэлементом.
        Решение <a target="_blank" rel="nofollow noopener noreferrer" href="https://jsfiddle.net/pqrbdjsc/">предложено</a>
        Антоном Немцовым.</p>

      <p>
        <button className="example_fixed_title"><span title="bar">foo</span></button>
      </p>
    </article>
  </Layout>
)
