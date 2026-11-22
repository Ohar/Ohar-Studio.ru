import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li>Памятным символом своей земли; опиши его (<DwTag id='subtle'>Мелкий</DwTag>).</li>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li>Лёгкий доспех (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Щит (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 2</DwTag>).</li>
      <li>Посох (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='two_handed'>Двуручный</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Копьё (<DwTag id='near'>Близко</DwTag>, <DwTag id='reach'>Удар копья</DwTag>, <DwTag id='thrown'>Метательное</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
