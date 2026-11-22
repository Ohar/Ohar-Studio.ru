import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import DwTag from '@/components/DwTag'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from '@/components/NextLink'

export default [
  {
    id: 'savage.background.wanderer',
    name: 'Бродяга',
    text: (
      <>
        <p>Многие могут считать тебя странным бродягой, который приходит и уходит, говорит загадками и подозрительно себя ведёт. Конечно, они знают что ты делаешь это не просто так, но ведь твоё причудливое поведение же не может быть оправдано?</p>
        <p><strong>Отправляясь бродить сам по себе</strong>, получи 1 <em>Загадку</em>, если ты отсутствуешь день; 2 <em>Загадки</em>, если несколько дней; 3 <em>Загадки</em>, если неделю и более. Создавая персонажа, получи сразу 3 <em>Загадки</em>.</p>
        <p>Ты можешь потратить 1 <em>Загадку</em>, чтобы:</p>
        <ul>
          <li>Вернуться из своих блужданий как раз в том месте и в то время, когда ты нужен, с подходящим снаряжением (как если бы ты заранее готовился в городе).</li>
          <li><DwMoveLink id='common.spout_lore'>Покопаться в памяти</DwMoveLink> и считать что у тебя выпало 10+, черпая знания из своих странствий.</li>
          <li>Достать очень специфичный, но довольно редкий и ценный обыденный предмет.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'savage.background.dying_nation',
    name: 'Из вымирающего народа',
    text: (
      <>
        <p><strong>Твой народ давно известен…</strong> (выбери три):</p>
        <ul>
          <li>Благородством</li>
          <li>Долгожительством</li>
          <li>Жадностью</li>
          <li>Злодеяниями</li>
          <li>Красотой</li>
          <li>Магией</li>
          <li>Мудростью</li>
          <li>Отвагой</li>
          <li>Песнями</li>
          <li>Свирепостью</li>
          <li>Тёмными сделкам</li>
          <li>______________</li>
        </ul>
        <p><strong><DwMoveLink id='common.parley'>Договариваясь</DwMoveLink>, используя репутацию своего народа</strong>, бросай с преимуществом.</p>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о своём народе</strong>, считай 6− как 7–9.</p>
      </>
    ),
  },
  {
    id: 'savage.background.grown_at_war',
    name: 'Взращённый войной',
    text: (
      <>
        <p>Ты убил своего первого врага, ещё будучи ребёнком.</p>
        <p><strong>В первый раз оценивая врага или союзника</strong>, ты можешь задать Ведущему один вопрос из списка и получить честный ответ:</p>
        <ul>
          <li>Чем он особенно опасен?</li>
          <li>Чем он слаб или уязвим?</li>
        </ul>
        <p>Кроме того, <strong>тратя <DwTag id='supplies'>Припасы</DwTag> и демонстрируя неопасный <DwTag id='subtle'>Мелкий</DwTag> предмет</strong>, опиши, как и кого ты убил таким предметом в прошлом и получи преимущество на атаку или запугивание с его помощью.</p>
      </>
    ),
  },
  {
    id: 'savage.start.hercules_desires',
    name: 'Геркулесовы аппетиты',
    text: (
      <>
        <p><strong>Когда ты делаешь ход, преследуя одно из своих <Link to={generateDwPcClassPathById('savage', 'strives')}>Стремлений</Link></strong>, бросай 1к6 + 1к8 (вместо 2к6).</p>
        <p>Если результат на к6 больше, чем на к8, Ведущий опишет тебе сложность или опасность, возникшую из-за твоего бездумного преследования своих <Link to={generateDwPcClassPathById('savage', 'strives')}>Стремлений</Link>.</p>
      </>
    ),
    quote: {
      text: 'Чем ярче будет сиять его свет, тем мрачнее будут тени за его спиной.',
      author: 'Берсерк',
    },
  },
  {
    id: 'savage.advanced.big_steps',
    name: 'Широко шагая',
    text: (
      <p><strong>Твоя <Link to={generateDwPcClassPathById('savage', 'capacity')}>нагрузка</Link> равна 10. Ты можешь носить</strong> до 4 веса как лёгкую нагрузку, 5–7 веса как среднюю и 8–10 веса как тяжёлую.</p>
    ),
  },
  {
    id: 'savage.advanced.impressive',
    name: 'Внушительный',
    text: (
      <>
        <p><strong>Бесстрашно вступая в бой и привлекая внимание врагов</strong>, брось +ТЕЛ</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери два.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Слабые враги застынут в нерешительности, безрассудно нападут или в ужасе побегут от тебя.</li>
              <li>Могучие враги сосредоточат своё внимание на тебе, видя в тебя самую большую угрозу.</li>
              <li>Твой урон получает преимущество до конца битвы, либо пока ты не падёшь.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'savage.advanced.invulnerable',
    name: 'Неуязвимый',
    text: (
      <>
        <p><strong>Если ты не <Link to={generateDwPcClassPathById('savage', 'capacity')}>перегружен</Link> и не носишь доспехи</strong>, у тебя +1 брони.</p>
        <p>Щит не мешает получить этот бонус.</p>
      </>
    ),
  },
  {
    id: 'savage.advanced.reckless',
    name: 'Безрассудный',
    text: (
      <p><strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink> и на 10+ решая пострадать от атаки врага, чтобы нанести дополнительный урон</strong>, ты наносишь +2к6 урона вместо +1к6.</p>
    ),
  },
  {
    id: 'savage.advanced.muscle_mountain',
    name: 'Гора мышц',
    text: (
      <p><strong>Для тебя рукопашное и <DwTag id='thrown'>Метательное</DwTag> оружие</strong> получает свойства <DwTag id='forceful'>Мощное</DwTag> и <DwTag id='messy'>Месиво</DwTag>. Если оно уже имело эти свойства, то они усиливаются.</p>
    ),
  },
  {
    id: 'savage.start.good_day_to_die',
    name: 'Хороший день, чтобы умереть',
    text: (
      <>
        <p><strong>Когда у тебя 5 или меньше <DwTag id='hp'>ОЗ</DwTag></strong>, любой получаемый тобой урон получает помеху.</p>
        <p><strong>Один раз в сессию</strong>, когда ты должен бросить на <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink>, не бросай и прими результат 10+.</p>
      </>
    ),
    quote: {
      text: 'Ты что, собираешься жить вечно?',
      author: 'Конан-варвар',
    },
  },
  {
    id: 'savage.advanced.bloodlust',
    name: 'Жажда крови',
    text: (
      <>
        <p><strong>Проливая кровь, свою или чужую и теряя себя в битве</strong>, ты игнорируешь боль, страх, контроль над разумом и эффекты <DwTag id='trauma'>Травм</DwTag> до тех пор, пока продолжаешь сражаться.</p>
        <p><strong>Когда действо прекращается</strong>, брось +ТЕЛ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— это была хорошая встряска, восстанови 1к4 <DwTag id='hp'>ОЗ</DwTag>.</li>
          <li>На <strong>7–9</strong>&nbsp;— ты устал, но всего несколько минут отдыха и ты будешь в порядке.</li>
          <li>На <strong>6−</strong>&nbsp;— вместо опыта отметь <DwTag id='trauma'>Травму</DwTag>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'savage.advanced.rage',
    name: 'Бешенство',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='savage.advanced.bloodlust'>Жажда крови</DwMoveLink></p>
        <p><strong>Пока ты ощущаешь <DwMoveLink id='savage.advanced.bloodlust'>Жажду крови</DwMoveLink></strong>, добавь свойство <DwTag id='area'>По Области</DwTag> к своим атакам ближнего боя, поскольку ты бросаешься на всех поблизости (на друзей и врагов). Бросай урон по каждой цели отдельно.</p>
      </>
    ),
  },
  {
    id: 'savage.advanced.unbending',
    name: 'Несгибаемый',
    text: (
      <p><strong>Когда ты физически или ментально скован</strong>, ты можешь получить <DwTag id='trauma'>Травму</DwTag>, чтобы немедленно вырваться из оков.</p>
    ),
  },
  {
    id: 'savage.advanced.my_turn',
    name: 'Мой черёд',
    text: (
      <p><strong>Нанося урон врагу, который навредил тебе или союзнику</strong>, наноси +1к4 урона.</p>
    ),
  },
  {
    id: 'savage.advanced.my_turn',
    name: 'Кровь богу крови',
    text: (
      <>
        <p><strong>Выполняя ритуал жертвоприношения чтобы получить совет от духов своих предков</strong> (тотемов, богов, и т. п.), потрать <DwTag id='supplies'>Припасы</DwTag> и брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты получаешь полезную информацию о своей текущей проблеме или дар, который поможет с ней справиться.</li>
          <li>На <strong>7–9</strong>&nbsp;— то же самое, но жертвы недостаточно и боги возьмут в качестве платы часть твоей плоти.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'savage.advanced.unstoppable',
    name: 'Неудержимый',
    text: (
      <p><strong>Когда ты <DwMoveLink id='common.defy_danger'>Спасаешься от угрозы</DwMoveLink>, дико прорываясь через препятствия на своём пути</strong> (стены, барьеры, людей и т. п.), ты не можешь провалиться. Считай 6− как 7–9 и всё твоё тело получает свойство <DwTag id='forceful'>Мощное</DwTag>.</p>
    ),
  },
  {
    id: 'savage.advanced.whatever_at_hand',
    name: 'Что под руку попадётся',
    text: (
      <p><strong>Ты можешь <DwMoveLink id='common.volley'>Давать залп</DwMoveLink>, метая всё, что можешь поднять</strong>. В твоих руках любой предмет получает свойство <DwTag id='thrown'>Метательное</DwTag>.</p>
    ),
  },
  {
    id: 'savage.advanced.still_hungry',
    name: 'Всё ещё голоден',
    text: (
      <>
        <p><strong>Выбери ещё одно <Link to={generateDwPcClassPathById('savage', 'strives')}>Стремление</Link></strong>.</p>
        <p>Ты можешь выбирать этот ход дважды.</p>
      </>
    ),
  },
  {
    id: 'savage.advanced.khan_of_khans',
    name: 'Хан Ханов',
    text: (
      <>
        <p><strong><DwMoveLink id='common.hire'>Нанимая</DwMoveLink> и собирая воинов под свой флаг</strong>, добавь ТЕЛ к броску.</p>
        <p>Кроме того, все нанятые тобой <em>Последователи</em> получают свойство <em>Воин</em>, пока ты их ведёшь.</p>
      </>
    ),
  },
  {
    id: 'savage.capstone.symbol_of_might',
    name: 'Символ могущества',
    text: (
      <>
        <p>Отметь себя символом могущества (татуировка, шрамирование, и т. п.).</p>
        <p><strong>Любое разумное смертное существо, увидевшее этот символ</strong>, инстинктивно поймёт, что с тобой нужно считаться, и будет относится к тебе с соответствующим уважением, страхом или ненавистью.</p>
      </>
    ),
  },
  {
    id: 'savage.capstone.ravager',
    name: 'Разоритель',
    text: (
      <p><strong>Когда ты <DwMoveLink id='common.hack_n_slash'>Рубишь и кромсаешь</DwMoveLink> и получаешь 12+, но твой враг выживает</strong>, назови что-то, чем он владеет (его меч, позиция, конечность, честь и т. п.), но потеря чего не убьёт его сразу. Он лишается этого. Опиши, как это происходит.</p>
    ),
  },
  {
    id: 'savage.capstone.warcry',
    name: 'Боевой вопль',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='savage.advanced.impressive'>Внушительный</DwMoveLink></p>
        <p><strong>Добавь эти варианты в список хода <DwMoveLink id='savage.advanced.impressive'>Внушительный</DwMoveLink></strong>:</p>
        <ul>
          <li>Все союзники воодушевляются и получают преимущество на следующий ход.</li>
          <li>Один враг колеблется или вздрагивает, давая тебе мгновение, чтобы свободно действовать.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'savage.capstone.one_who_knocks',
    name: 'Я — тот, кто стучит',
    text: (
      <p><strong><DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink> и получая 12+</strong>, ты оборачиваешь угрозу против неё самой (Ведущий опишет — как, или попросит описать тебя).</p>
    ),
  },
  {
    id: 'savage.capstone.magic_contempt',
    name: 'Презрение к магии',
    text: (
      <p><strong>Когда нечистая магия смертных заставляет тебя <DwMoveLink id='common.defy_danger'>Спасаться от угрозы</DwMoveLink></strong>, считай 6− как 7–9.</p>
    ),
  },
  {
    id: 'savage.capstone.obsession',
    name: 'Одержимость',
    text: (
      <p><strong>Ты всегда можешь спросить Ведущего</strong> <em>«Могу ли я здесь воплотить свои <Link to={generateDwPcClassPathById('savage', 'strives')}>Стремления</Link>?»</em>. Он честно тебе ответит и (если можешь) скажет, как это сделать.</p>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'savage',
    }),
  )
  .sort(sortByName)
