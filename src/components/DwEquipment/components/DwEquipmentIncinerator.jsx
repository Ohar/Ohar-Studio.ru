import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p>Ты не носишь оружия и у тебя нет необходимости в защите, кроме той, что даёт твоё внутреннее пламя.</p>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li>Символ принесённых в прошлом жертв, опиши его (<DwTag id='subtle'>Мелкий</DwTag>).</li>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>)</li>
    </ul>
  </>
)
