import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Отметиной, оставленной на тебе Покровителем. Опиши её!</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li>Жертвенный кинжал (<em>Рука</em>, <DwTag id='subtle'>Мелкий</DwTag>).</li>
      <li>Гравированный ритуальный посох (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='two_handed'>Двуручный</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
      <li>Ритуальные робы (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Ритуальные инструменты, подношения и атрибутика (<DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
