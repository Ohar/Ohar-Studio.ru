import React from 'react'

import DwTag from '@/components/DwTag'
import DwMoveLink from '@/components/DwMoveLink'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li>припасами (3 использования, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>кинжалом (<DwTag id='hand'>Рука</DwTag>, <DwTag id='subtle'>Мелкий</DwTag>).</li>
    </ul>
    <p><em>Выбери, если это подходит твоему <DwMoveLink id='sorcerer.start.flaw'>Изъяну</DwMoveLink>:</em></p>
    <ul>
      <li>волшебная вещица (<DwTag id='subtle'>Мелкая</DwTag>), через которую ты проводишь магию (навершие посоха, амулет и т. п.), опиши её.</li>
    </ul>
    <p><strong>Выбери три:</strong></p>
    <ul>
      <li>посох (<DwTag id='two_handed'>Двуручный</DwTag>, <DwTag id='close'>Взмах меча</DwTag>, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>зачарованные робы (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li>припасы (3 использования, <DwTag id='weight'>вес 1</DwTag>);</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>);</li>
      <li>зелье невидимости (<DwTag id='subtle'>Мелкое</DwTag>);</li>
      <li>волшебная вещица (<DwTag id='subtle'>Мелкая</DwTag>) — интересная, но не очень полезная. Что она делает?</li>
    </ul>
  </>
)
