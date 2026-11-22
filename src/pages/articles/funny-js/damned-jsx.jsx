import React from "react"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"

import ImgEasyWay from "@/images/easy_way.png"
import ImgHardWay from "@/images/hard_way.png"

export default () => (
  <Layout>
    <Seo title='JSX бьёт по рукам'/>
    <article>
      <h1>JSX бьёт по рукам</h1>

      <time dateTime="2016-06-09">9 июня 2016 г.</time>

      <h2>Что не так?</h2>

      <p>Допустим, надо сделать из строки <code>'A,B'</code> разметку </p>

      <code>
<pre>
&lt;i&gt;A&lt;/i&gt;
  &lt;b&gt;B&lt;/b&gt;
</pre>
      </code>

      <p>Вы хотите сделать это самым очевидным способом — обработав строку</p>

      <img src={ImgEasyWay.src}
           alt="formatter = input => input.replace('A', <i>A</i>).replace('B', <b>B</b>)"
           width="399"
           height="40"/>

        <p>Но, вместо лёгкого решения, вы получаете какую-то фигню вроде <code>[object Object],[object Object]</code>.
        </p>

        <h2>Почему так?</h2>

        <p>Мистер JSX только делает вид что HTML в нём — это строки. Это ни капельки не строки, а очень даже
          DOM-объекты. И операции работы со строками, которые вы пытаетесь провести своими грязными ручонками,
          попросту ничего не дадут.</p>

        <p>В лучшем случае вы получите знаменитый <code>[object][Object]</code> вместо желаемой разметки.</p>

        <h2>Что же делать?</h2>

        <p>Ну, как обычно, страдать. Есть неплохой вариант — разбивать строку на массив элементов и каждому из них
          давать свой шаблон и складывать в массив-результат.</p>

        <img src={ImgHardWay.src}
             alt="formatter = input => {let result = [];input.split(',').forEach(e => {switch (e) {case 'A':result.push(<i>{e}</i>);break;case 'B':result.push(<b>{e}</b>);break;}});return result}"
             width="299"
             height="298"/>

        <p>М-м-м-м, сколько кода…</p>

        <p>А просто сделать замены в строке, засунув туда HTML — нельзя.</p>

    </article>
  </Layout>
)
