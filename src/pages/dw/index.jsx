import React from 'react'

import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'
import DwMenu from '@/components/DwMenu'
import DwLayout from '@/components/DwLayout'

const DwPage = () => (
  <DwLayout>
    <Seo
      title='Dungeon World'
      description='Ходы и классы персонажей'
      keywords={['Dungeon World', 'Unlimited Dungeons']}
    />
    <PageTitle>Dungeon World</PageTitle>
    <p>Список классов и ходов Dungeon World на основе хака «Безграничные подземелья» (Unlimited Dungeons). Это тестовый материал для хака «Кладовка Брифа».</p>
    <DwMenu/>
  </DwLayout>
)

export default DwPage
