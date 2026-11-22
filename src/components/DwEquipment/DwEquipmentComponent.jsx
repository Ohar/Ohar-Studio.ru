import React from 'react'

import DwTag from '@/components/DwTag'

const DwEquipmentComponent = ({children}) => (
  <section className='DwPcClass__equipment DwPcClass__section'>
    <h2>Снаряжение</h2>
    {children}
    <h3>Нагрузка</h3>
    <section
      className='DwPcClass__capacity'
      id='capacity'
    >
      <p>Твоя максимальная нагрузка равна <strong>9</strong>. Каждый предмет (кроме <DwTag id='subtle'>Мелких</DwTag>) добавляет свой вес к твоей нагрузке.</p>
      <ul>
        <li><strong>1–3</strong> веса — это лёгкая нагрузка (ты <em>быстр</em> и <em>тих</em>);</li>
        <li><strong>4–6</strong> нормальная нагрузка;</li>
        <li><strong>7–9</strong> тяжёлая (ты <em>медленен</em>, <em>шумен</em>, тебе <em>жарко</em> и ты <em>быстро устаёшь</em>).</li>
      </ul>
    </section>
  </section>
)

export default DwEquipmentComponent
