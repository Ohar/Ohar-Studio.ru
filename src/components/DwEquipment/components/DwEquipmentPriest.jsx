import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
      <li><em>Символом божества</em>&nbsp;— опиши его! (<DwTag id='subtle'>Мелкий</DwTag>).</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li><em>Посох</em> (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='two_handed'>Двуручный</DwTag>, <DwTag id='weight'>вес 1</DwTag>),</li>
      <li><em>Булава</em> (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>),</li>
      <li><em>Клевец</em> (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>),</li>
      <li><em>Освящённая лёгкая броня</em> (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>),</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>),</li>
      <li><em>Зелье исцеления</em> (<DwTag id='subtle'>Мелкий</DwTag>).</li>
    </ul>
  </>
)
