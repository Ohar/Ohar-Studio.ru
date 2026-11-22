import React from 'react'
import { Link } from '@/components/NextLink'

import DwMoveLink from '@/components/DwMoveLink'
import DwTag from '@/components/DwTag'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'

export default [
  {
    id: 'inventor.background.creepy_genius',
    name: 'Жуткий гений',
    text: (
      <p>Ты им ещё покажешь! <strong><DwMoveLink id='common.parley'>Договариваясь</DwMoveLink> с кем-то, и запугивая своими пугающими творениями или достижениями</strong>, ты можешь бросать ИНТ вместо ХАР.</p>
    ),
  },
  {
    id: 'inventor.background.armor_smith',
    name: 'Бронник',
    text: (
      <p>Ты игнорируешь свойство брони <DwTag id='clumsy'>Неуклюжая</DwTag>, а <DwTag id='weight'>вес</DwTag> щитов для тебя уменьшается на 1.</p>
    ),
  },
  {
    id: 'inventor.background.field_tester',
    name: 'Полевой испытатель',
    text: (
      <p><strong><DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink> алхимической или механической природы</strong>, ты бросаешь с преимуществом.</p>
    ),
  },
  {
    id: 'inventor.background.enthusiast',
    name: 'Энтузиаст',
    text: (
      <>
        <p>Ты просто обожаешь <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink> и получаешь +1 к их максимальному количеству.</p>
      </>
    ),
  },
  {
    id: 'inventor.start.gadget_charge',
    name: 'Зарядка гаджетов',
    text: (
      <>
        <p><strong>Делая небольшой перерыв, длиной хотя бы в несколько минут, чтобы перезарядить и настроить свои <DwMoveLink id='inventor.start.gadget_belt'>Гаджеты</DwMoveLink></strong>, ты получаешь 3 <em>Заряда</em> (максимум 3).</p>
        <p><strong>Используя <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> в качестве оружия</strong>, ты можешь потратить 1 <em>Заряд</em>, чтобы бросать +ИНТ вместо +СИЛ или +ЛОВ.</p>
        <p>Если, <strong><DwMoveLink id='common.volley'>Давая залп</DwMoveLink> <DwMoveLink id='inventor.start.gadget_belt'>Гаджетом</DwMoveLink></strong>, ты должен потратить боеприпасы, вместо этого потрать 1 <em>Заряд</em>.</p>
      </>
    ),
  },
  {
    id: 'inventor.start.gadget_belt',
    name: 'Пояс гаджетов',
    text: (
      <>
        <p>У тебя есть <em>Пояс Гаджетов</em>, содержащий 3 <em>Гаджета</em> (максимум 3). Все <em>Гаджеты</em> имеют вес 1 (если это оружие); считаются   <em>Мелкими</em> (если это не оружие); одно подходящее свойство дальности (если нужно); наносят к8 урона (если это оружие). <strong>Для каждого имеющегося у тебя <em>Гаджета</em>, выбери одно из каждой строчки</strong>:</p>
        <ol>
          <li><em>алхимический, криогенный, магнитный, механический, паровой, пироматический, эктоплазмический, электрический</em></li>
          <li><em>амплифицирующий, взрывной, защитный, излучающий, лучевой, ослабляющий, полевой, проецирующий, пропульсивный, реверсивный, усиляющий</em></li>
          <li><em>аксессуар, безделушки, ботинки, голем, жезл, излучатель, костюм, очки, палочка, перчатка, пояс, пушка, светильник, склянки, устройство</em></li>
          <li><em>Пробивание 2</em>, <em>Мощный</em>, <em>Броня +2 против ________</em>, Альтернативное передвижение: _____, Стихия: _____</li>
        </ol>
        <p><strong>Примеры <em>Гаджетов</em>:</strong> Магнитые полевые ботинки (<em>Мелкие</em>, альтернативное передвижение: парение), Криогенные взрывные склянки (<em>Близко</em>, стихия: лёд, вес 1), Пироматическая ослабляющая перчатка (<em>Мелкая</em>, <em>Броня +2 против Огня</em>).</p>
        <p><strong>Работая с подходящими инструментами над <em>Гаджетом</em> около часа</strong>, потрать <DwTag id='supplies'>Припасы</DwTag> и создай новый или измени уже существующий <em>Гаджет</em>. <strong>Если ты работаешь в мастерской</strong>, тебе не нужно тратить Припасы.</p>
      </>
    ),
  },
  {
    id: 'inventor.start.field_test',
    name: 'Полевое испытание',
    text: (
      <>
        <p><strong>Используя один из <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink>, чтобы выйти из трудного положения</strong>, опиши, как он помогает, и брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> работает, как и ожидалось, но выбери одно.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— что-то идёт немного не так, выбери два.</p>
            <ul>
              <li>Эффект <DwMoveLink id='inventor.start.gadget_belt'>Гаджета</DwMoveLink> не продлится долго&nbsp;— тебе нужно поторопиться, чтобы извлечь из него пользу.</li>
              <li><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> привлекает нежелательное внимание или ставит кого-то в сложное положение.</li>
              <li><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> повреждён. Его можно починить, но это займёт несколько минут и потребует концентрации.</li>
              <li><DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> истощает твои резервы&nbsp;— потрать 1 <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink>.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.start.quick_craft',
    name: 'На скору руку',
    text: (
      <>
        <p><strong>Быстро ремонтируя, изменяя назначение или создавая на коленке простое устройство, умещающееся в ладонь</strong>, опиши его, потрать <DwTag id='supplies'>Припасы</DwTag> и брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— оно функционирует ровно столько, сколько тебе нужно.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Оно работает, но недолго. Нужно поторопиться, чтобы извлечь из него пользу.</li>
              <li>Оно работает, но у него есть какая-то нежелательная особенность или осложнение.</li>
              <li>Оно будет работать, но только если его подзарядить. Потрать 1 <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink>.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.start.let_me_check',
    name: 'Дай-ка посмотрю',
    text: (
      <>
        <p><strong>Несколько секунд осматривая, изучая или вертя в руках что-то интересное</strong>, ты можешь задать Ведущему до двух вопросов из списка. Ведущий даст честный ответ.</p>
        <ul>
          <li>Что это делает?</li>
          <li>Кто это сделал?</li>
          <li>Что с ним не так и как я могу это починить?</li>
          <li>Что недавно делали с этой вещью или для чего её использовали?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.advanced.scientific_nonsense',
    name: 'Научный бред',
    text: (
      <>
        <p><strong>Используя научные термины, чтобы обмануть или запутать</strong>, брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— твои слушатели сбиты с толку и верят тебе.</li>
          <li>На <strong>7–9</strong>&nbsp;— они либо придерутся к твоим рассуждениям, либо не до конца убеждены&nbsp;— в любом случае они потребуют доказать что ты знаешь, о чём говоришь.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.advanced.construct_companion',
    name: 'Конструкт-компаньон',
    text: (
      <>
        <p>Ты создаёшь себе механического компаньона. <strong>Опиши его и выбери его специализацию:</strong></p>
        <ul>
          <li>
            <p><strong>Помощник</strong></p>
            <p>Твой конструкт подаёт тебе именно то, что тебе нужно&nbsp;— <DwTag id='reload'>Перезарядка</DwTag> занимает намного меньше времени и в сложной ситуации тебе не нужно тратить время на ковыряние в карманах или сумке.</p>
            <p>Твоя <Link to={generateDwPcClassPathById('inventor', 'capacity')}>нагрузка</Link> равна 10. Ты можешь носить до 4 веса как лёгкую нагрузку, 5–7 веса как среднюю и 8–10 веса как тяжёлую.</p>
          </li>
          <li>
            <p><strong>Охранник</strong></p>
            <p><DwMoveLink id='common.defend'>Вставая на защиту</DwMoveLink>, бросай с преимуществом.</p>
          </li>
          <li>
            <p><strong>Исследователь</strong></p>
            <p><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink>, бросай с преимуществом.</p>
          </li>
          <li>
            <p><strong>Разведчик</strong></p>
            <p>Ты можешь <DwMoveLink id='common.discern_realities'>Изучать обстановку</DwMoveLink> используя ИНТ, а не МДР.</p>
          </li>
        </ul>
        <p>Ты получаешь бонус от своего <em>Компаньона</em> только если он от тебя не дальше вытянутой руки. <strong>Если <em>Компаньон</em> уничтожен или ты хочешь сменить его специализацию</strong>, то ты можешь воссоздать или изменить его за пару дней работы, имея подходящие инструменты.</p>
      </>
    ),
  },
  {
    id: 'inventor.advanced.danger_company',
    name: 'Опасно ходить одному',
    text: (
      <p><strong><DwMoveLink id='common.help'>Помогая</DwMoveLink> союзнику, ты можешь потратить 1 <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink> и дать ему один из своих <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink></strong> — опиши как помогает твой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink>. Делая это, ты не подвергаете себя риску, затратам или последствиям.</p>
    ),
  },
  {
    id: 'inventor.advanced.overload',
    name: 'Перегрузка',
    text: (
      <p><strong>Используя <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> как оружие</strong>, ты можешь перегрузить его, чтобы он нанёс +1к6 урона. <strong>Перегружая <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink></strong>, то либо тратишь 1 <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink>, либо он будет повреждён&nbsp;— его можно починить, но это потребует немного времени и концентрации.</p>
    ),
  },
  {
    id: 'inventor.advanced.recycle',
    name: 'Переработка',
    text: (
      <>
        <p><strong>Заканчивая использовать устройство, созданное <DwMoveLink id='inventor.start.quick_craft'>На скору руку</DwMoveLink></strong>, ты можешь разобрать его, и выбрать одно:</p>
        <ul>
          <li>Восстанови 1 <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink>.</li>
          <li>Ты (или союзник на расстоянии вытянутой руки) получаешь <em>Броня +2 против следующего получения урона</em>.</li>
          <li>Ты мгновенное чинишь сломанный <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> или какое-то другое снаряжение.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.advanced.hard_work',
    name: 'Работа на износ',
    text: (
      <p>В тяжёлой ситуации ты выкручиваешься любыми способами. <strong>Если ход требует от тебя потратить <DwMoveLink id='inventor.start.gadget_charge'>Заряд</DwMoveLink>, а у тебя больше не осталось <DwMoveLink id='inventor.start.gadget_charge'>Зарядов</DwMoveLink></strong>, ты можешь повредить один из <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink> и получить 2 <DwMoveLink id='inventor.start.gadget_charge'>Заряда</DwMoveLink>. <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> можно починить, но это потребует немного времени и концентрации.</p>
    ),
  },
  {
    id: 'inventor.advanced.preparation',
    name: 'Скорее, мне нужно подготовиться',
    text: (
      <>
        <p><strong>Усердно подготавливаясь и переделывая своё снаряжение в течении часа</strong>, получи 1 <em>Подготовки</em>. <strong>Подготавливаясь день или дольше</strong>, получи 3 <em>Подготовки</em>.</p>
        <p><strong>Когда твои приготовления пригождаются</strong>, объясни — как именно, потрать 1 <em>Подготовки</em> и выбери одно:</p>
        <ul>
          <li>Достань немного простых деталей или запчастей, которых как раз хватит, чтобы что-то сварганить или починить <DwMoveLink id='inventor.start.quick_craft'>На скору руку</DwMoveLink> (не тратя <DwTag id='supplies'>Припасы</DwTag>) или создать или изменить <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> (не тратя <DwTag id='supplies'>Припасы</DwTag>).</li>
          <li>Если у тебя меньше максимума <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink>, немедленно достань нужный тебе <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink>, но сразу после первого использования (или через короткое время) он станет полностью бесполезен (взорвавшись, развалившись на бесполезные запчасти или иначе).</li>
          <li>Добавь +1 урона к своей атаке или атаке своего механического помощника.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.advanced.assembly',
    name: 'Сборка',
    text: (
      <>
        <p><strong>Разрабатывая какой-либо механизм или устройство</strong>, скажи Ведущему: чего ты хочешь добиться и каким образом. Ведущий поставит перед тобой от 1 до 4 требований из списка ниже. Когда ты их выполнишь, закончи <em>Сборку</em> и твоё устройство будет готово.</p>
        <ul>
          <li>Это займёт несколько минут / часов / дней / недель / месяцев.</li>
          <li>Ты должен делать это в особом месте (например _____).</li>
          <li>Ты должен делать это в определённое время (например _____).</li>
          <li>Сначала ты должен _____________</li>
          <li>Тебе нужна помощь от ___________</li>
          <li>Ты сможешь добиться лишь _____________</li>
          <li>Ты и союзники рискуете из-за _____________</li>
          <li>Тебе нужно пожертвовать или потратить ____________, чтобы сделать это.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'inventor.capstone.eureka',
    name: 'Эврика! Получилось!',
    text: (
      <p><strong>Получая 12+ на <DwMoveLink id='inventor.start.field_test'>Полевое испытание</DwMoveLink></strong>, твой <DwMoveLink id='inventor.start.gadget_belt'>Гаджет</DwMoveLink> превосходит все твои ожидания&nbsp;— не выбирай проблем из списка.</p>
    ),
  },
  {
    id: 'inventor.capstone.professor_gadget',
    name: 'Профессор Гаджет',
    text: (
      <p><strong>Твой максимум <DwMoveLink id='inventor.start.gadget_belt'>Гаджетов</DwMoveLink></strong> увеличивается на 2.</p>
    ),
  },
  {
    id: 'inventor.capstone.old_friend',
    name: 'Старый друг лучше новых двух',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='inventor.advanced.construct_companion'>Конструкт-компаньон</DwMoveLink></p>
        <p><strong>Твой <DwMoveLink id='inventor.advanced.construct_companion'>компаньон</DwMoveLink></strong> теперь может иметь две специализации вместо одной.</p>
      </>
    ),
  },
  {
    id: 'inventor.capstone.my_little_friends',
    name: 'Мои маленькие друзья',
    text: (
      <>
        <p><strong>Несколько дней собирая в мастерской автоматона для своих нужд</strong>, брось +ИНТ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— получи 3 <em>Идеи</em>.</li>
          <li>На <strong>7–9</strong>&nbsp;— получи 2 <em>Идеи</em>.</li>
        </ul>
        <p><strong>Считай <em>Автоматона</em> <em>Последователем</em></strong> без <em>Инстинкта</em>, <em>Цены</em>, и <em>Верности</em>, с 6 <DwTag id='hp'>ОЗ</DwTag>, костью урона к4 и свойствами <DwTag id='reckless'>Безрассудный</DwTag> и <em>Искусственный</em>. Ты можешь сделать его говорящим, хотя он не очень умён. Опиши его, отталкиваясь от выбранных свойств и ходов.</p>
        <p><strong>Выбери по свойству <em>Автоматона</em> за каждую <em>Идею</em></strong> (можно выбирать один вариант несколько раз).</p>
        <ul>
          <li>
            <p><strong>Калибровка поведения</strong></p>
            <p>Убери свойство <DwTag id='reckless'>Безрассудный</DwTag>.</p>
          </li>
          <li>
            <p><strong>Расширение функционала</strong></p>
            <p>Добавь свойство или ход на твой выбор.</p>
          </li>
          <li>
            <p><strong>Боевые протоколы</strong></p>
            <p>Увеличь кость урона (например с к4 до к6).</p>
          </li>
          <li>
            <p><strong>Усиленная конструкция</strong></p>
            <p>Увеличь <DwTag id='hp'>ОЗ</DwTag> на 2.</p>
          </li>
          <li>
            <p><strong>Укреплённые пластины</strong></p>
            <p>Добавь 1 брони.</p>
          </li>
        </ul>
        <p><strong>Возясь в мастерской около дня, чтобы выжать больше из нового или существующего <em>Автоматона</em></strong>, ты можешь выбрать один <em>Разгон</em> и получить за каждый <em>Разгон</em> получить 1 <em>Идею</em> (максимум ИНТ <em>Идей</em> за <em>Разгоны</em>).</p>
        <p><strong>Разгоны</strong></p>
        <ul>
          <li>Добавь <em>Автоматону</em> нежелательное свойство или ход, например <em>Шумный</em> или <em>Невовремя ломается</em>. Этот вариант можно выбирать несколько раз.</li>
          <li>Чтобы закончить работу, тебе понадобится редкий и/или дорогой реагент.</li>
          <li><em>Автоматон</em> получает подобие разума. Он получает <em>Инстинкт</em>: <em>«Следовать собственной воле»</em> и <em>Верность</em>, равную ИНТ.</li>
          <li>Твоя работа привлекает нежелательное внимание или ставит тебя в сложное положение.</li>
        </ul>
        <p>У тебя есть одновременно <strong>только один <em>Автоматон</em></strong>. При создании нового старый либо перестанет функционировать, либо перестанет тебе подчиняться.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'inventor',
    }),
  )
  .sort(sortByName)
