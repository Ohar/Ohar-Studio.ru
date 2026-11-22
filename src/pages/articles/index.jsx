import React from 'react'

import Layout from '@/components/Layout'
import LinkList from '@/components/LinkList'
import Seo from '@/components/Seo'

import funnyJsArticleList from '@/constants/funnyJsArticleList'

const articleList = [
  {
    url: '/articles/smotrya-na-kod-s-zakrytymi-glazami',
    text: 'Смотря на код с закрытыми глазами',
  },
  {
    url: '/articles/how-does-a-visually-impaired-computer-programmer-do-programming',
    text: 'Как программируют слабовидящие программисты?',
  },
  {
    url: '/articles/funny-js',
    text: 'Минутка занимательного яваскрипта',
    subList: funnyJsArticleList,
  },
  {
    url: '/articles/rules',
    text: 'Правила оформления текстов на русском языке',
  },
]

const ArticlesPage = () => (
  <Layout>
    <Seo
      title='Статьи'
      description='Статьи Павла Лысенко'
      keywords={['Pavel Lysenko\'s articles', 'Статьи Павла Лысенко']}
    />
    <h1>Статьи</h1>
    <LinkList list={articleList}/>
  </Layout>
)

export default ArticlesPage
