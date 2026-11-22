import React from 'react'

import DwTag from '@/components/DwTag'

export default () => (
  <>
    <p><strong>Ты начинаешь игру с:</strong></p>
    <ul>
      <li><DwTag id='supplies'>Припасами</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>)</li>
      <li>Кольцом-печаткой, свидетельством принадлежности к дворянскому роду (<DwTag id='subtle'>Мелкое</DwTag>, ~10 серебряных монет). Опиши эмблему на нём!</li>
    </ul>
    <p><strong>Выбери свою семейную реликвию:</strong></p>
    <ul>
      <li>Кавалерийский палаш, которым твой предок срубал врагов, скача верхом (<DwTag id='close'>Взмах меча</DwTag>, +1 урона, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Украшенная самоцветами рапира, которую твой предок выиграл на дуэли (<DwTag id='close'>Взмах меча</DwTag>, <DwTag id='piercing'>Пробивание 1</DwTag>, <DwTag id='precise'>Точная</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Сделанный на заказ лук, которым твой предок убил дракона (<DwTag id='near'>Близко</DwTag>, <DwTag id='far'>Далеко</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
    <p><strong>Выбери <em>Владения</em> + 1 вариантов:</strong></p>
    <ul>
      <li>Украшенный серебром доспех (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Щит с семейным гербом (<DwTag id='armor'>броня 1</DwTag>, <DwTag id='weight'>вес 2</DwTag>).</li>
      <li><DwTag id='healing_potion'>Зелье лечения</DwTag> (<DwTag id='subtle'>Мелкое</DwTag>).</li>
      <li><DwTag id='supplies'>Припасы</DwTag> (3 использования, <DwTag id='weight'>вес 1</DwTag>).</li>
      <li>Лошадь.</li>
      <li>Кошель с золотом (100 золотых, <DwTag id='weight'>вес 1</DwTag>).</li>
    </ul>
  </>
)
