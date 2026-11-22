import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p>Ты начинаешь игру с:</p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Сумкой с инструментами (<DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Своими <em>Гаджетами</em> (оружие <DwTag id='weight'>весит 1</DwTag>, не-оружие считается <DwTag id='subtle'>Мелким</DwTag>).</li>
    </ul>
    <p>Выбери два:</p>
    <ul>
      <li>Механический костюм (<DwTag id='clumsy'>Неуклюжий</DwTag>, <DwTag id='armor'>броня 2</DwTag>, <DwTag id='weight'>вес 2</DwTag>).</li>
      <li>Защитный комбинезон (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Три склянки <em>Алхимического тумана</em> (<DwTag id='subtle'>Мелкие</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
      <li>Зелье невидимости (<DwTag id='subtle'>Мелкое</DwTag>).</li>
    </ul>
  </>
)
