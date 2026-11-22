import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Знаком или отметиной твоего ордена, монастыря, или учителя (<DwTag id='subtle'>Мелкий</DwTag>). Опиши его.</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li>Монашеский посох (<DwTag id='reach'>Удар копья</DwTag>, <DwTag id='two_handed'>Двуручный</DwTag>, <DwTag id='precise'>Точный</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>3 сюрикена (<DwTag id='thrown'>Метательное</DwTag>, <DwTag id='near'>Близко</DwTag>, <DwTag id='subtle'>Мелкий</DwTag>).</li>
      <li>Меч (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
