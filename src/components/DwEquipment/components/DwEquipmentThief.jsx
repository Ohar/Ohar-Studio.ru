import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>воровскими инструментами (<DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
      <li>кинжал (<DwTag id='hand'>Рука</DwTag>, <DwTag id='precise'>Точный</DwTag>, <DwTag id='subtle'>Мелкий</DwTag>) и короткий меч (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>рапира (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='precise'>Точная</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
      <li>3 метательных ножа (<DwTag id='thrown'>Метательные</DwTag>, <DwTag id='near'>Близко</DwTag>, <DwTag id='subtle'>Мелкие</DwTag>);</li>
      <li>лук (<DwTag id='near'>Близко</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p>Выбери одно:</p>
    <ul>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>) и противоядие (<DwTag id='subtle'>Мелкое</DwTag>);</li>
      <li>бутыль яда (<DwTag id='subtle'>Мелкая</DwTag>), опиши его действие;</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>);</li>
      <li>лёгкий доспех (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
