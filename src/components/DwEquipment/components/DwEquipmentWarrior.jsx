import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li>любым обычным оружием на твой выбор (например: меч, булава, топор, двуручный меч, арбалет);</li>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li>кольчуга (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>) и <DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>средняя броня (<DwTag id='armor'>броня 2</DwTag>, <DwTag id='clumsy'>Неуклюжая</DwTag>, <DwTag id='weight'>вес 2</DwTag>).</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li>щит (+1 брони, <DwTag id='weight'>вес 2</DwTag>);</li>
      <li>лук (<DwTag id='near'>Близко</DwTag>, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>кинжал (<DwTag id='hand'>Рука</DwTag>, <DwTag id='subtle'>Мелкий</DwTag>) и <DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>10 золотых.</li>
    </ul>
  </>
)
