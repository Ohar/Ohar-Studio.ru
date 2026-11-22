import React from 'react'
import DwMoveLink from '@/components/DwMoveLink'

// TODO: Разобраться как делать рекурсию DwTag
import DwTag from '@/components/DwTag'

export default [
  {
    id: 'fiery',
    title: 'Огненное',
    text: (<p>Это поджигает.</p>),
  },
  {
    id: 'piercing',
    title: 'Пробивание Х',
    text: (<p>Урон этого проходит сквозь броню. Игнорируется Х брони.</p>),
  },
  {
    id: 'ignore_armor',
    title: 'Игнорирует броню',
    text: (<p>Из урона этим не вычитается броня.</p>),
  },
  {
    id: 'wear',
    title: 'Носимое',
    text: (<p>Это носят, надевая на себя и как-то закрепляя. Например: доспехи, щиты, одежда.</p>),
  },
  {
    id: 'hold',
    title: 'Несомое',
    text: (<p>Это несут в руках или с собой. Например: оружие, умирающие друзья, трупы врагов.</p>),
  },
  {
    id: 'hand',
    title: 'Рука',
    text: (<p>Это применяется на расстоянии вытянутой руки.</p>),
  },
  {
    id: 'reload',
    title: 'Перезарядка',
    text: (<p>После применения этому нужно время на перезарядку.</p>),
  },
  {
    id: 'hungry',
    title: 'Голодное',
    text: (<p>Это нужно кормить. Или оно начнёт есть самостоятельно.</p>),
  },
  {
    id: 'thrown',
    title: 'Метательное',
    text: (
      <>
        <p>Эту штуку можно метать. После броска её нельзя метнуть снова, пока ты её, очевидно, не вернёшь.</p>
        <p>Ей можно <DwMoveLink id='common.volley'>Давать залп</DwMoveLink>, причём, возможно, через СИЛ вместо ЛОВ (решит Ведущий).</p>
      </>
    ),
  },
  {
    id: 'area',
    title: 'По Области',
    text: (<p>Это поражает всех в области.</p>),
  },
  {
    id: 'far',
    title: 'Далеко',
    text: (<p>Это достанет до цели на расстоянии различимого крика.</p>),
  },
  {
    id: 'close',
    title: 'Взмах меча',
    text: (<p>Это применяется на расстоянии взмаха меча.</p>),
  },
  {
    id: 'reach',
    title: 'Удар копья',
    text: (<p>Это достанет до цели в паре шагов от тебя.</p>),
  },
  {
    id: 'near',
    title: 'Близко',
    text: (<p>Это достанет до цели, у которой ты можешь разглядеть белки глаз.</p>),
  },
  {
    id: 'precise',
    title: 'Точное',
    text: (
      <>
        <p>Это оружие поощряет точные удары.</p>
        <p>Им можно <DwMoveLink id='common.hack_n_slash'>Рубить и кромсать</DwMoveLink>, бросая +ЛОВ вместо +СИЛ.</p>
      </>
    ),
  },
  {
    id: 'dangerous',
    title: 'Опасное',
    text: (
      <>
        <p>Использование этого предмета или эффекта рискованно.</p>
        <p>Если ты не предпринял мер предосторожности, Ведущий вправе обрушить на тебя все последствия твоей опрометчивости.</p>
      </>
    ),
  },
  {
    id: 'messy',
    title: 'Месиво',
    text: (<p>Это наносит жуткие раны, буквально разрывая жертв на куски.</p>),
  },
  {
    id: 'forceful',
    title: 'Мощное',
    text: (<p>Это может отбросить жертву или даже сбить её с ног.</p>),
  },
  {
    id: 'inconvenient',
    title: 'Неудобное',
    text: (<p>Это неудобно или сложно использовать.</p>),
  },
  {
    id: 'two_handed',
    title: 'Двуручное',
    text: (<p>Для эффективного использования этого нужны обе руки.</p>),
  },
  {
    id: 'trauma',
    title: 'Травма',
    text: (
      <>
        <p><em>Травма</em> — результат изнеможения или особенно крепкого удара.</p>
        <p>Ноют ли от непомерной нагрузки мышцы, трудно ли дышать от удара великаньей палицы, полакомился ли твоей кровью вампир, или же голова до сих пор трещит от голоса Чёрной Книги — в любом случае <em>Травма</em> не пройдёт сама, её нужно лечить.</p>
        <p><em>Травма</em> даёт помеху на соответствующий бросок.</p>
        <p>Физические <em>Травмы</em> задевают твои Силу, Ловкость и Телосложение.</p>
        <p>Ментальные <em>Травмы</em> задевают твои Интеллект, Мудрость и Харизму.</p>
      </>
    ),
  },
  {
    id: 'hard_wound',
    title: 'Проблемная Рана',
    text: (
      <>
        <p>Проблемная рана — это то, что стоит между <em>Травмой</em> и <DwMoveLink id='common.last_breathe'>Смертью</DwMoveLink>.</p>
        <p>Обычно проблемные раны — это значительное увечье, или потеря конечности или органа — например, глаза или руки.</p>
        <p>Каждая проблемная рана уникальна и для лечения придётся применять мощную магию или особые протезы.</p>
      </>
    ),
  },
  {
    id: 'weight',
    title: 'Вес Х',
    text: (<p>Это увеличивает твою нагрузку на Х.</p>),
  },
  {
    id: 'clumsy',
    title: 'Неуклюжее',
    text: (
      <>
        <p>В этом непросто передвигаться.</p>
        <p>Ты получаешь −1 на все броски, пока носишь это. Штраф суммируется.</p>
      </>
    ),
  },
  {
    id: 'subtle',
    title: 'Мелкий предмет',
    text: (<p>Размер этого пренебрежительно мал и оно почти ничего не весят.</p>),
  },
  {
    id: 'advantage',
    title: 'Преимущество',
    text: (<p>Бросай на одну кость больше и убери худший результат.</p>),
  },
  {
    id: 'disadvantage',
    title: 'Помеха',
    text: (<p>Бросай на одну кость больше и убери лучший результат.</p>),
  },
  {
    id: 'reckless',
    title: 'Безрассудно',
    text: (
      <p>Безрассудные не рассуждают и делают что сказано. Максимально прямолинейно.</p>
    ),
  },
  {
    id: 'supplies',
    title: 'Припасы',
    text: (
      <>
        <p><em>Припасы</em> — некое количество простых полезных предметов, которые компетентные приключенцы догадались бы взять с собой туда, куда они отправились. Ты можешь заявить что тратишь <em>Припасы</em> и достать оттуда еду, питьё, бинты, боеприпасы, и подобные предметы.</p>
        <p>Припасы можно потратить, чтобы достать…</p>
        <ul>
          <li>…Достаточное еды на всех в группе на целый день пути или одно <DwMoveLink id='common.set_camp'>Разбивание Лагеря</DwMoveLink>.</li>
          <li>…Предмет походного снаряжения или подобную вещь ценой в несколько серебряных.</li>
          <li>…Дополнительные боеприпасы, метательный нож или кинжал.</li>
          <li>…Простые лекарства для оказания первой помощи.</li>
        </ul>
        <p>На усмотрение Ведущего, <em>Припасы</em> могут иметь некие ограничения или особенности. Например, <em>Припасы</em>, приобретённые в грязной конюшне, скорее всего будут включать в себя только очень простые грубые предметы; а, если ты плавал в канализации, то вряд ли у тебя в <em>Припасах</em> теперь можно найти еду.</p>
      </>
    ),
  },
  {
    id: 'healing_potion',
    title: 'Зелье лечения',
    text: (
      <p>Выпив зелье целиком, ты излечишь 10 ОЗ или одну <em>Травму</em>.</p>
    ),
  },
  {
    id: 'armor',
    title: 'Броня Х',
    text: (
      <>
        <p>Защищает от вреда и ранений.</p>
        <p>Получая урон, вычти из него свою броню.</p>
      </>
    ),
  },
  {
    id: 'hp',
    title: 'ОЗ',
    text: (
      <>
        <p>Очки здоровья.</p>
        <p>Когда они закончатся — настанет твой <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'elf_made',
    title: 'Сделано эльфами',
    text: (
      <>
        <p>Это — создано руками эльфов.</p>
        <p>Время не властно над этим предметом, он не может быть испорчен злом и весит на 1 меньше нормы.</p>
      </>
    ),
  },
  {
    id: 'dwarf_made',
    title: 'Сделано дварфами',
    text: (
      <>
        <p>Это — образец дварфийского мастерства.</p>
        <p>Время не властно над этим предметом и его нельзя сломать или уничтожить ничем слабее драконьего пламени или особых секретных дварфийских техник.</p>
      </>
    ),
  },
  {
    id: 'follower',
    title: 'Инстинкт',
    text: (
      <>
        <p>The rules in this section cover the creation, recruitment, and usage of followers, replacing the original Dungeon World rules for hirelings. These rules make followers feel more impactful and allow for greater customization.</p>
        <p>Only the penniless and foolhardy undertake an expedition without proper support in the form of porters, hunters, guides, and guards, not to mention specialists who can bring their skills to bear in several ways. Followers are those individuals who offer such assistance, accompanying the party on their exploits about the world.</p>
        <p>Like monsters, followers have HP, damage, and instincts. They also have moves and tags that indicate what they’re good at and how they act. Unlike monsters, they have three additional statistics: Quality, Loyalty, and Cost.</p>
      </>
    ),
  },
  {
    id: 'instinct',
    title: 'Инстинкт',
    text: (
      <>
        <p>Instinct is comparable to a monster’s Instinct. Instinct is the trouble that the follower gets into or pursues when idle or stressed. Commanding a follower to act against their Instinct requires making the Order Follower move.</p>
        <p>Followers deal and take damage like a monster does. When they would deal damage, roll a d6 and add their damage modifier (usually +0), just like any other damage roll. When they take damage, they lose HP. When they are reduced to 0 HP, they are out of the action and probably dead or dying—their fate is in the GM’s hands.</p>
        <p>Followers who are with the party for a long time may evolve and advance, increasing in Quality or gaining tags or moves. This is purely at the GM’s discretion and should be rooted in the fiction.</p>
      </>
    ),
  },
  {
    id: 'cost',
    title: 'Цена',
    text: (
      <>
        <p>Cost describes what motivates the follower to follow. Although a strong leader or worthy cause can be motivating factors, all but the most selfless followers do the dirty work in exchange for coin or other material reward. A follower’s Loyalty is increased when you pay their Cost. Costs aren’t always tangible things, they may be include revenge against a common enemy, an opportunity to discover something, or the rush of glory in battle.</p>
        <p>When you pay a follower’s Cost, increase their Loyalty by 1 (to a maximum of +3). In general, the higher the Follower’s Quality, the greater amount of their Cost will be required to meet it.</p>
      </>
    ),
  },
  {
    id: 'quality',
    title: 'Качество',
    text: (
      <p>Quality represents how effective the follower is, particularly in the areas defined by their tags and moves. A followers’ Quality can range from -1 (rubbish) to +3 (masterful). A follower of average competence has a Quality of 0.</p>
    ),
  },
  {
    id: 'loyalty',
    title: 'Верность',
    text: (
      <p>Loyalty tracks how committed the follower is to you and your cause. It usually starts at +1 but changes often, ranging from -3 to +3. Note that Loyalty is a resource to be used up by the GM like any other.</p>
    ),
  },
]
