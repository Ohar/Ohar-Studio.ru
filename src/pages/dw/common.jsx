import React from 'react'
import { Link } from '@/components/NextLink'

import PageTitle from '@/components/PageTitle'
import Seo from '@/components/Seo'
import DwCommonMoves from '@/components/DwCommonMoves'
import DwLayout from '@/components/DwLayout'

const DwPage = () => (
  <DwLayout>
    <Seo
      title='Dungeon World'
      description='Основные ходы'
      keywords={['Dungeon World', 'Unlimited Dungeons']}
    />
    <PageTitle>
      <Link to='/dw'>DW</Link>:
      Основные ходы
    </PageTitle>

    <p>Список основных ходов Dungeon World на основе хака «Безграничные подземелья» (Unlimited Dungeons). Это тестовый материал для хака «Кладовка Брифа».</p>

    <DwCommonMoves/>
  </DwLayout>
)

export default DwPage
