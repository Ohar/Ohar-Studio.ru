import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Лёгким доспехом (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Составным луком (<DwTag id='near'>Близко</DwTag>, <em>Далеко</em>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери два:</strong></p>
    <ul>
      <li>Короткий меч (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Копьё (<DwTag id='reach'>Удар копья</DwTag>, <DwTag id='thrown'>Метательное</DwTag>, <DwTag id='near'>Близко</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
    </ul>
  </>
)
