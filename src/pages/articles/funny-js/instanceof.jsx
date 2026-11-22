import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

export default () => (
  <Layout>
    <Seo title='Чудесный instanceof'/>
    <article>
      <h1>Чудесный <code>instanceof</code></h1>

      <time dateTime="2016-04-14">14 апреля 2016 г.</time>

      <h2>Что не так?</h2>

      <code>
<pre>
'foo' instanceof String // false
</pre>
      </code>

      <p>Строка не является экземпляром класса Строка. Чудесно, правда?</p>

      <h2>Почему так?</h2>

      <p>Строка <code>'foo'</code> создаётся через <em>литерал строки</em> — кавычки (<code>''</code>). <strong>Это
        не объект, а примитив</strong>, а у примитива нет прототипа.</p>

      <p>Это относится ко всем примитивам, созданным через литералы — числам, строкам и булям.</p>

      <code>
<pre>
true instanceof Boolean // false
42 instanceof Number // false
</pre>
      </code>

      <p>Но те же числа, строки и були, созданные через <em>конструктор</em> оператором <code>new</code> — очень даже
        <em>являются экземплярами своих классов</em>, потому как конструктор создаёт не примитив, но объект.</p>

      <code>
        {
          /* eslint-disable react/jsx-no-comment-textnodes */
        }
<pre>
// НИ В КОЕМ СЛУЧАЕ НЕ ПОВТОРЯЙТЕ ЭТОГО ДОМА ИЛИ НА РАБОТЕ
// ЭТО МОЖЕТ ПРИВЕСТИ К САМОВОЛОСОВЫРЫВАНИЮ ИЛИ ПОБИТИЮ КОЛЛЕГАМИ
let foo = new String('bar');
foo instanceof String // true
</pre>
      </code>
      {
        /* eslint-enable react/jsx-no-comment-textnodes */
      }

      <h2>Что же делать?</h2>

      <p>Ну как обычно, страдать. Но если вам всё равно надо узнать тип переменной, проверяйте, не примитив ли это
        через <code>typeof</code>.</p>

      <p>И только если это не примитив (<code>typeof</code> выдаст <code>'object'</code>), то имеет смысл проверять
        его прототип через <code>instanceof</code>.</p>

    </article>
  </Layout>
)
