import React from 'react'

import Layout from '@/components/Layout'
import LinkList from '@/components/LinkList'
import Seo from '@/components/Seo'

import funnyJsArticleList from '@/constants/funnyJsArticleList'

export default () => (
  <Layout>
    <Seo
      title='Минутка занимательного яваскрипта'
      description='Чудесные маленькие находки и большие раздражающие странности в славном JavaScript'
    />
    <h1>Минутка занимательного яваскрипта</h1>
    <LinkList list={funnyJsArticleList}/>
  </Layout>
)
