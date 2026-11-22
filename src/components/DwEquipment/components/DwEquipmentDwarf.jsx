import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
      <li>Дварфийской кольчугой (2 брони, <DwTag id='dwarf_made'>Сделана дварфами</DwTag>, <DwTag id='weight'>вес 2</DwTag>)</li>
      <li>Набор инструментов твоего ремесла (<DwTag id='dwarf_made'>Сделаны дварфами</DwTag>, <DwTag id='weight'>вес 1</DwTag>)</li>
    </ul>
    <p><strong>Выбери оружие</strong></p>
    <ul>
      <li>Отличный позолоченный и гравированный топор (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='dwarf_made'>Сделан дварфами</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Тяжёлый боевой молот со штампом сделавшего его мастера (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='dwarf_made'>Сделан дварфами</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Простая кирка. Без прикрас, но дело делает (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='dwarf_made'>Сделана дварфами</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери одно:</strong></p>
    <ul>
      <li>Дварфийский арбалет (<DwTag id='near'>Близко</DwTag>, +1 урона, <DwTag id='reload'>Перезарядка</DwTag>, <DwTag id='dwarf_made'>Сделан дварфами</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Дварфийский щит (+1 брони, <DwTag id='dwarf_made'>Сделан дварфами</DwTag>, <DwTag id='weight'>вес 2</DwTag>).</li>
      <li>Горстка полудрагоценных камней (<DwTag id='subtle'>Мелкая</DwTag>, стоимостью около 10 золотых).</li>
    </ul>
  </>
)
