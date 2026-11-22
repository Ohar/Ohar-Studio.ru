import React from 'react'
import { Link } from '@/components/NextLink'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import DwTag from '@/components/DwTag'
// import DwTag from '@/components/DwTag'

export default [
  {
    id: 'warrior.capstone.equanimity',
    name: 'Невозмутимость',
    text: (
      <p><strong>Когда ты <DwMoveLink id='common.fight_as_one'>Борешься как один</DwMoveLink>, пытаясь оставаться спокойным и действовать взвешенно</strong>, считай 6− как 7–9.</p>
    ),
  },
  {
    id: 'warrior.capstone.great_defender',
    name: 'Великий защитник',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='warrior.advanced.defender'>Защитник</DwMoveLink></p>
        <p><strong>Пока у тебя есть <em>Готовность</em></strong> (от хода <DwMoveLink id='common.defend'>Встать на защиту</DwMoveLink>), ты всегда можешь, вместо защищаемого, полностью принять на себя эффект или атаку — тебе не нужно тратить <em>Готовность</em>, у тебя просто получается.</p>
      </>
    ),
  },
  {
    id: 'warrior.capstone.counter_strike',
    name: 'Ответный удар',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='warrior.advanced.parry'>Парирование</DwMoveLink></p>
        <p><strong>Полностью <DwMoveLink id='warrior.advanced.parry'>Парируя</DwMoveLink> вражескую атаку</strong>, ты можешь потратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink>, чтобы тут же нанести этому врагу свой урон.</p>
      </>
    ),
  },
  {
    id: 'warrior.capstone.war_master',
    name: 'Мастер войны',
    text: (
      <p><strong>Если ты подготовился к битве</strong> (через разработку стратегии, спокойную медитацию или иначе), то вступая в следующий бой, ты получаешь 2 <DwMoveLink id='warrior.start.focus'>Фокуса</DwMoveLink> вместо 1.</p>
    ),
  },
  {
    id: 'warrior.capstone.mighty_muscles',
    name: 'Могучие мышцы',
    text: (
      <>
        <p><strong>Совершая подвиг необычайной силы</strong> (вырываясь из цепей, пробивая стену и т. п.), у тебя всё получается, но выбери одно:</p>
        <ul>
          <li>Это занимает много времени.</li>
          <li>Ты наносишь незапланированный вред или разрушения.</li>
          <li>Для тебя это не проходит бесследно (получи <DwTag id='trauma'>Травму</DwTag>).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warrior.capstone.tireless',
    name: 'Неустанный',
    text: (
      <>
        <p><strong><DwMoveLink id='common.set_camp'>Разбив лагерь</DwMoveLink> и хорошо выспавшись</strong>, ты либо восстанавливаешь дополнительно 1к6 <DwTag id='hp'>ОЗ</DwTag>, либо избавляешься от одной <DwTag id='hp'>ОЗ</DwTag> (на твой выбор).</p>
        <p>Кроме того, при любом признаке опасности, <strong>ты всегда просыпаешься готовым действовать</strong>.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.versatility',
    name: 'Многогранность',
    text: (
      <p>Получи сложный ход <Link to={generateDwPcClassPathById('thief')}>Вора</Link>, <Link to={generateDwPcClassPathById('savage')}>Дикаря</Link>, Паладина (TODO), или <Link to={generateDwPcClassPathById('ranger')}>Следопыта</Link>.</p>
    ),
  },
  {
    id: 'warrior.advanced.war_cry',
    name: 'Боевой клич',
    text: (
      <>
        <p><strong>Когда ты кричишь на поле боя</strong>, союзники могут тебя слышать, несмотря на хаос и грохот битвы вокруг.</p>
        <p>Также, ты можешь тратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Видимый тобой союзник стряхнул с себя страх.</li>
          <li>Видимый тобой союзник восстановил 1к4 <DwTag id='hp'>ОЗ</DwTag>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warrior.advanced.defender',
    name: 'Защитник',
    text: (
      <p><strong><DwMoveLink id='common.defend'>Вставая на защиту</DwMoveLink></strong>, получи на 1 <em>Готовности</em> больше. На 6− ты всё равно получаешь 1 <em>Готовности</em> (в дополнение к тому, что скажет Ведущий).</p>
    ),
  },
  {
    id: 'warrior.advanced.gotta_realistic',
    name: 'Нужно быть реалистом',
    text: (
      <>
        <p><strong>Делая мрачное предсказание или угрюмое наблюдение</strong>, запиши его ниже.</p>
        <p className='fill_place'/>
        <p><strong>Если то предсказание сбылось</strong>, получи 1 <em>Уверенность</em> (максимум 3).</p>
        <p><strong>Если то предсказание не сбылось или уже не может сбыться</strong>, сотри его.</p>
        <p>Ты можешь потратить 1 <em>Уверенность</em>, чтобы получить преимущество на любой бросок.</p>
        <p><strong><DwMoveLink id='common.session_end'>В конце сессии</DwMoveLink></strong> потеряй всю <em>Уверенность</em> и получи столько же опыта.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.tactics',
    name: 'Тактика',
    text: (
      <>
        <p><strong><DwMoveLink id='common.discern_realities'>Изучая обстановку</DwMoveLink></strong>, ты можешь задавать и эти вопросы:</p>
        <ul>
          <li>Кто или что здесь самая большая угроза?</li>
          <li>Какова на самом деле позиция врага (тактическая, физическая, стратегическая, социальная)?</li>
          <li>Что здесь я могу использовать как оружие?</li>
        </ul>
        <p><strong>Вступая в бой</strong>, задай Ведущему 1 вопрос из списка хода <DwMoveLink id='common.discern_realities'>Изучить обстановку</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.threatening',
    name: 'Угрожающий',
    text: (
      <p><strong><DwMoveLink id='common.parley'>Договариваясь</DwMoveLink>, используя угрозы или насилие</strong>, бросай с преимуществом.</p>
    ),
  },
  {
    id: 'warrior.advanced.unbreakable',
    name: 'Неодолимый',
    text: (
      <>
        <p><strong>Когда твои <DwTag id='hp'>ОЗ</DwTag> в битве падает до 0</strong>, ты можешь продолжать сражаться. Каждый раз, когда ты получаешь урон, имея 0 <DwTag id='hp'>ОЗ</DwTag>, получи 1 <em>Увечье</em> (максимум 5). Если тебя что-то исцеляет, пока ты продолжаешь сражаться, вместо этого потеряй 1 <em>Увечье</em>.</p>
        <p><strong>Когда ты прекращаешь сражаться</strong>, брось на <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink> со штрафом −1 за каждое <em>Увечье</em>. Если ты выжил, потеряй все <em>Увечья</em>.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.unstoppable',
    name: 'Неудержимый',
    text: (
      <p><strong>Если ты <DwMoveLink id='common.hack_n_slash'>Рубишь и кромсаешь</DwMoveLink> и враг выживает</strong>, ты можешь потратить 1 <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink>, чтобы получить преимущество на следующий ход <DwMoveLink id='common.hack_n_slash'>Руби и кромсай</DwMoveLink> против этого врага.</p>
    ),
  },
  {
    id: 'warrior.advanced.hold_line',
    name: 'Держать строй',
    text: (
      <>
        <p>Ты можешь <strong><DwMoveLink id='common.help'>Помогать</DwMoveLink> союзнику</strong> с любого расстояния, покуда он может тебя слышать и видеть.</p>
        <p>Кроме того, <strong>когда союзник успешно <DwMoveLink id='common.help'>Помогает</DwMoveLink> тебе</strong>, ты можешь получить 1 <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink> вместо обычных преимуществ от <DwMoveLink id='common.help'>Помощи</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.parry',
    name: 'Парирование',
    text: (
      <p><strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink></strong>, на 7–9 ты можешь решить не наносить свой урон, а вместо этого вычесть его из урона противника. Ты страдаешь от оставшегося урона, а противник не страдает вообще.</p>
    ),
  },
  {
    id: 'warrior.advanced.armor_user',
    name: 'Привычный к доспехам',
    text: (
      <p>Ты игнорируешь свойство брони <DwTag id='clumsy'>Неуклюжая</DwTag>, а <DwTag id='weight'>вес</DwTag> щитов для тебя уменьшается на 1.</p>
    ),
  },
  {
    id: 'warrior.backstory.bloody_past',
    name: 'Кровавое прошлое',
    text: (
      <>
        <p>Ты оставил позади жизнь полную насилия и имя, которым матери пугали своих детей. Какой был твой самый большой «подвиг»?</p>
        <p><strong><DwMoveLink id='common.parley'>Договариваясь</DwMoveLink>, используя угрозы или насилие</strong>, спроси Ведущего, знает ли собеседник о твоей чёрной репутации и получить честный ответ (обычно — <em>«Да»</em>). <strong>Если ответ <em>«Да»</em></strong>, ты можешь бросать +СИЛ вместо +ХАР.</p>
        <p>Кроме того, <strong>сражаясь, чтобы убивать без жалости и колебаний</strong>, ты наносишь +1к4 урона.</p>
      </>
    ),
  },
  {
    id: 'warrior.backstory.champion',
    name: 'Чемпион',
    text: (
      <>
        <p>Ты выступал на аренах и в бойцовских ямах. Для тебя хорошая драка — это полотно, а пот и кровь — краски. Как ты заработал свой самый большой выигрыш и как бездарно прожёг его?</p>
        <p><strong>Крича на поле боя</strong>, ты можешь потратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink>, чтобы полностью приковать внимание врага к себе, до тех пор, пока между вами сохраняется зрительный контакт.</p>
        <p><strong>Вступая в битву</strong>, ты можешь потратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink>, чтобы получить преимущество на первый бросок <DwMoveLink id='common.hack_n_slash'>Руби и кромсай</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.combat_training',
    name: 'Боевая подготовка',
    text: (
      <>
        <p><em>Другие классы не могут взять этот ход.</em></p>
        <p><strong>Когда у тебя есть около часа свободного времени</strong>, опиши: как ты тренируешься, ухаживаешь за своим оружием или иначе оттачиваешь своё мастерство. Ты получаешь 3 <em>Закалки</em> (максимум 3).</p>
        <p><strong>Нанося урон</strong>, ты можешь потратить 1 <em>Закалку</em> чтобы получить преимущество на этот бросок урона.</p>
        <p><strong>Если ты готовишься вместе с союзниками </strong>(например, спаррингом или иначе), то <strong>когда один из этих союзников, сражаясь, наносит урон</strong>, ты можешь потратить 1 <em>Закалку</em>, чтобы его бросок урона получил преимущество.</p>
        <p>Для получения преимущества <strong>урон должен быть физической природы</strong> (удары, выстрелы и т. п.).</p>
      </>
    ),
  },
  {
    id: 'warrior.start.focus',
    name: 'Боевой фокус',
    text: (
      <>
        <p><strong>Вступая в бой</strong> или <strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink> и получая 10+</strong>, получи 1 <em>Фокус</em> (максимум 3).</p>
        <p><strong>Когда битва заканчивается</strong>, потеряй весь оставшийся <em>Фокус</em>.</p>
        <p><strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink></strong>, на 7+, в дополнении к нанесению урона, ты можешь потратить <em>Фокус</em> и совершить один <em>Манёвр</em> своего Боевого стиля.</p>
        <p><strong>Просто нанося урон врагу</strong>, ты можешь совершить ход, требующий <em>Фокуса</em>, не тратя <em>Фокус</em>.</p>
      </>
    ),
  },
  {
    id: 'warrior.backstory.hire_blade',
    name: 'Наёмный клинок',
    text: (
      <>
        <p>Ты работал за деньги, охраняя караваны и выбивая долги у заёмщиков. Ты много чему научился, но и заработал немало врагов. Что заставило тебя бросить эту работу?</p>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о своём нелицеприятном наёмническом прошлом</strong>, ты можешь бросать +СИЛ вместо +ИНТ. Если ты это делаешь, Ведущий может спросить: <em>«Кто перешёл тебе дорогу или кто может ещё держать на тебя обиду?»</em>. Ответь прямо сейчас.</p>
        <p>Кроме того, <strong>получая урон</strong>, ты можешь отметить <DwTag id='trauma'>Травму</DwTag> и уменьшить урон вдвое.</p>
      </>
    ),
  },
  {
    id: 'warrior.advanced.iron_toughness',
    name: 'Крепкий, как железо',
    text: (
      <p>Увеличь свои максимальные <DwTag id='hp'>ОЗ</DwTag> на 4.</p>
    ),
  },
  {
    id: 'warrior.advanced.style_cruel',
    name: 'Боевой стиль: Жестокий напор',
    text: (
      <>
        <p><strong>Сражаясь дико и жестоко</strong>, ты можешь тратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink> на следующие Манёвры:</p>
        <ul>
          <li>Дать атаке свойства <DwTag id='piercing'>Пробивание 2</DwTag> и <DwTag id='messy'>Месиво</DwTag>. Если она уже была с <DwTag id='messy'>Месивом</DwTag>, то становится ещё ужаснее.</li>
          <li>Нанести половину урона ещё одному врагу в пределах досягаемости.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warrior.advanced.style_crush',
    name: 'Боевой стиль: Сокрушающие удары',
    text: (
      <>
        <p><strong>Сражаясь грубой силой</strong>, ты можешь тратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink> на следующие Манёвры:</p>
        <ul>
          <li>Нанести +1к4 урона и сделать атаку <DwTag id='forceful'>Мощной</DwTag>. Если она уже была <DwTag id='forceful'>Мощной</DwTag>, то становится ещё сокрушительнее.</li>
          <li>Навсегда уменьшить броню врага на 1 (если она была).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warrior.advanced.style_precise',
    name: 'Боевой стиль: Быстрые выпады',
    text: (
      <>
        <p><strong>Сражаясь быстрыми и точными ударами</strong>, ты можешь тратить <DwMoveLink id='warrior.start.focus'>Фокус</DwMoveLink> на следующие Манёвры:</p>
        <ul>
          <li>Игнорировать свойства <DwTag id='close'>Взмах меча</DwTag> и <DwTag id='reach'>Удар копья</DwTag> у атак врагов и нанести +1 урона.</li>
          <li>Обезоружить или обезвредить оппонента — отобрать его оружие, сломать руку, временно ослепить и т. п.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'warrior.start.tough',
    name: 'Крепкий орешек',
    text: (
      <>
        <p><strong>Совершая <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink></strong>, ты можешь бросать +ТЕЛ вместо +ничего.</p>
        <p>Кроме того, <strong>получив 7–9 на <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink></strong> ты можешь выбрать и отметить <DwTag id='trauma'>Травму</DwTag> и восстановить 1 <DwTag id='hp'>ОЗ</DwTag>.</p>
      </>
    ),
  },
  {
    id: 'warrior.backstory.veteran_soldier',
    name: 'Ветеран',
    text: (
      <>
        <p>Ты повидал столько войн и битв, что их хватит не на один десяток жизней. За кого ты воевал в последний раз? Какой был твой самый большой триумф и самый катастрофический провал?</p>
        <p><strong>Ты знаешь как нужно готовиться и снаряжаться:</strong> ты игнорируешь последствия <Link to={generateDwPcClassPathById('warrior', 'capacity')}><em>тяжёлой нагрузки</em></Link>, и получаешь на 1 использование <DwTag id='supplies'>Припасов</DwTag> больше, чем обычно (4 вместо 3).</p>
        <p><strong><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink></strong>, тебе не нужно снимать броню, чтобы выспаться и ты просыпаешься полностью готовым при малейших признаках опасности.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'warrior',
    }),
  )
  .sort(sortByName)
