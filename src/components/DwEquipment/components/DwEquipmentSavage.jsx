import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
      <li>Кинжалом (<DwTag id='hand'>Рука</DwTag>, <DwTag id='subtle'>Мелкий</DwTag>)</li>
      <li>Знаком из мест, через которые ты путешествовал или откуда ты родом. Опиши его! (<DwTag id='subtle'>Мелкий</DwTag>)</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li>Любое простое одноручное оружие (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>) и щит (+1 брони, вес 2).</li>
      <li>Любое простое двуручное оружие (+1 урона, <DwTag id='close'>Взмах меча</DwTag>, <DwTag id='two_handed'>Двуручное</DwTag>, <DwTag id='weight'>вес 2</DwTag>)</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
      <li>Лук (<DwTag id='near'>Близко</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
