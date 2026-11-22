import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import sortByName from '@/utils/sortByName'
import DwTag from '@/components/DwTag'

export default [
  {
    id: 'monk.background.hermit',
    name: 'Отшельник',
    text: (
      <>
        <p><strong><DwMoveLink id='monk.start.meditation'>Медитируя</DwMoveLink> в тишине природы</strong>, бросай с преимуществом.</p>
        <p><strong><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink></strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink> вместо сна или <DwTag id='supplies'>Припасов</DwTag>.</p>
      </>
    ),
  },
  {
    id: 'monk.background.fighter',
    name: 'Драчун',
    text: (
      <>
        <p><strong>Когда ты сражаешься с силой великого тайфуна</strong>, твои безоружные атаки становятся <DwTag id='forceful'>Мощными</DwTag> вместо <DwTag id='precise'>Точных</DwTag>.</p>
        <p><strong>Вступая в бой</strong>, получи 1 <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'monk.background.pacifist',
    name: 'Пацифист',
    text: (
      <>
        <p><strong>Когда ты отказываешься отвечать насилием на насилие</strong>, и твой следующий ход — <DwMoveLink id='common.parley'>Договориться</DwMoveLink> или <DwMoveLink id='common.defend'>Встать на защиту</DwMoveLink>, бросай его с преимуществом.</p>
        <p><strong>Касаясь кого-то, дабы вернуть его к миру</strong>, ты можешь потратить 1 <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы успокоить его, избавить от страха и сомнений и восстановить ему 1к4 <DwTag id='hp'>ОЗ</DwTag>.</p>
      </>
    ),
  },
  {
    id: 'monk.start.meditation',
    name: 'Медитация',
    text: (
      <>
        <p><strong>Несколько минут очищая свои мысли в мирной обстановке</strong>, потеряй всё <em>Течение</em> и брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— получи 3 <em>Течения</em>.</li>
          <li>На <strong>7–9</strong>&nbsp;— получи 2 <em>Течения</em>.</li>
          <li>На <strong>6−</strong>&nbsp;— получи 1 <em>Течения</em>, но Ведущий делает ход.</li>
        </ul>
        <p>Ты не можешь иметь <em>Течение</em>, нося доспех или щит.</p>
      </>
    ),
  },
  {
    id: 'monk.start.martial_arts',
    name: 'Боевые искусства',
    text: (
      <>
        <p><strong>Твоё тело — оружие само по себе</strong>. Назови и опиши свой стиль боевых искусств:</p>
        <p className='fill_place'/>
        <p>Твои безоружные удары <DwTag id='precise'>Точные</DwTag> и с дальностью <DwTag id='hand'>Рука</DwTag>. Ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink> чтобы:</p>
        <ul>
          <li>Нанести следующим безоружным ударом +1к4 урона.</li>
          <li>Быстро сократить дистанцию до врага, не дав ему среагировать.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.start.vows',
    name: 'Обеты',
    text: (
      <>
        <p><strong>Выбери два обета</strong>, которым ты поклялся следовать.</p>
        <ol>
          <li className='fill_place'/>
          <li className='fill_place'/>
        </ol>
        <p><strong>Придерживаясь обета, несмотря на опасность, проблемы или неудобства</strong>, получи 1 <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>.</p>
      </>
    ),
    note: (
      <p><strong>Примеры обетов</strong>: бедность, веселье, дружба, знания, милосердие, мир, секретность, сострадание, храбрость, честность, честь, чистота.</p>
    ),
  },
  {
    id: 'monk.advanced.mountain_stance',
    name: 'Стойка горы',
    text: (
      <>
        <p><strong>Крепко держа позицию</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Закрепиться на этом месте, тебя не смогут сдвинуть, поднять или иначе сдвинуть, пока ты не сдвинешься сам.</li>
          <li>Следующий урон по тебе получит помеху.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.dragon_claw',
    name: 'Драконья лапа',
    text: (
      <>
        <p><strong>Нанося удары с яростью ревущего огня</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Получить <DwTag id='advantage'>Преимущество</DwTag> на урон и сделать атаку <DwTag id='forceful'>Мощной</DwTag>.</li>
          <li>Мгновенно проломить, сломать или уничтожить обычный предмет.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.monkey_grip',
    name: 'Обезьянья драка',
    text: (
      <>
        <p><strong>Лупя врага открытыми ладонями</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Сбить его с ног, прижать к стене, или сдвинуть в пределах досягаемости.</li>
          <li>Обезоружить врага — забрать его оружие, сломать конечность, выбить зубы и т. п.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.snake_bites',
    name: 'Укусы змеи',
    text: (
      <>
        <p><strong>Нанося быстрые удары пальцами</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Получить <DwTag id='advantage'>Преимущество</DwTag> на урон и <DwTag id='ignore_armor'>Игнорировать броню</DwTag>.</li>
          <li>Отказаться от урона, чтобы оглушить или искалечить — сильные враги страдают лишь несколько мгновений, а слабые — очень долго.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.weapon_master',
    name: 'Мастер оружия',
    text: (
      <>
        <p>Ты можешь выбирать этот ход несколько раз.</p>
        <p><strong>Выбирая этот ход</strong>, выбери тип оружия. В твоих руках выбранный тип оружия получает все свойства твоих безоружных атак, и с ним можно делать ходы, требующие <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>.</p>
        <ul>
          <li>Древковое оружие и копья.</li>
          <li>Дубинки и посохи.</li>
          <li>Мечи.</li>
          <li>Топоры.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.mind_peace',
    name: 'Покой ума',
    text: (
      <>
        <p><strong><DwMoveLink id='monk.start.meditation'>Медитируя</DwMoveLink></strong>, на 7+ выбери одно:</p>
        <ul>
          <li>Получи 1 <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>.</li>
          <li>Избавься от ментальной <DwTag id='trauma'>Травмы</DwTag>.</li>
          <li>Присоединившийся к медитации союзник избавляется от ментальной <DwTag id='trauma'>Травмы</DwTag>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.body_peace',
    name: 'Покой тела',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='monk.advanced.mind_peace'>Покой ума</DwMoveLink></p>
        <p><strong><DwMoveLink id='monk.start.meditation'>Медитируя</DwMoveLink></strong>, на 7+ выбери одно:</p>
        <ul>
          <li>Избавься от физической <DwTag id='trauma'>Травмы</DwTag>.</li>
          <li>Восстанови 1к4 <DwTag id='hp'>ОЗ</DwTag>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.wandering_sage',
    name: 'Странствующий мудрец',
    text: (
      <p><strong>Когда ты приходишь в мирное поселение</strong>, любой местный мудрец или учёный примет тебя как гостя и поможет советом, но взамен может попросить о помощи с какой-то проблемой (решит Ведущий).</p>
    ),
  },
  {
    id: 'monk.advanced.teacher_lessons',
    name: 'Уроки учителя',
    text: (
      <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> и вспоминая слова своего учителя</strong>, опиши — как его мудрость помогает тебе в текущей ситуации и бросай +МДР вместо +ИНТ.</p>
    ),
  },
  {
    id: 'monk.advanced.chakra',
    name: 'Чакра',
    text: (
      <p><strong>Манипулируя внутренним балансом</strong>, ты можешь нанести себе <DwTag id='trauma'>Травму</DwTag>, чтобы получить 1 <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>.</p>
    ),
  },
  {
    id: 'monk.advanced.light_as_wind',
    name: 'Лёгкость ветра',
    text: (
      <>
        <p><strong>Проявляя сверхъестественную ловкость, равновесие или координацию</strong>, брось +ЛОВ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выберите одно.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выберите два.</p>
            <ul>
              <li>Потрать 1 <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink> (можно выбрать дважды).</li>
              <li>Ты оказываешься там, где не рассчитывал.</li>
              <li>Ты перенапрягаешься, отметь физическую <DwTag id='trauma'>Травму</DwTag>.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.fast_river_defence',
    name: 'Защита быстрой реки',
    text: (
      <>
        <p><strong>Двигаясь как быстро текущая река</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Мгновенно вырваться из физических оков.</li>
          <li>Остановить, отразить, уклониться или даже поймать летящий в тебя снаряд.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.flying_wind_fist',
    name: 'Град ударов',
    text: (
      <>
        <p><strong>Маша кулаками так, что их свист становится слышен</strong>, ты можешь тратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы:</p>
        <ul>
          <li>Дать своей атаке свойство <DwTag id='area'>По Области</DwTag>.</li>
          <li>Ополовинить эффект или урон от атаки по себе.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'monk.advanced.body_rock',
      name: 'Каменные мышцы',
    text: (
      <>
        <p><strong>Пока у тебя есть <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink></strong>, получи +1 брони.</p>
        <p><strong>Когда твоя броня уменьшает урон до 0</strong>, оружие нападавшего раскалывается или ломается.</p>
      </>
    ),
  },
  {
    id: 'monk.capstone.reach_behind_the_veil',
    name: 'Доставать за Завесу',
    text: (
      <>
        <p><strong>Пока у тебя есть <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink></strong>, твои атаки могут воздействовать на нематериальных существ.</p>
        <p><strong>Ударяя врага</strong>, ты можешь потратить <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink>, чтобы временно пошатнуть его контроль над магической или сверхъестественной способностью.</p>
      </>
    ),
  },
  {
    id: 'monk.capstone.technique_learned',
    name: 'Изученная техника',
    text: (
      <p><strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink> или <DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink></strong>, на 12+ ты можешь сразу сделать свой подходящий ход, не тратя <DwMoveLink id='monk.start.meditation'>Течения</DwMoveLink>. Ты исполняешь этот ход мастерски, идеально и безупречно.</p>
    ),
  },
  {
    id: 'monk.capstone.flow_river_defence',
    name: 'Защита текущей реки',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='monk.advanced.fast_river_defence'>Защита быстрой реки</DwMoveLink></p>
        <p><strong>Текучими движениями и быстрыми рефлексами поворочивая атаку против самого атакующего</strong>, ты можешь <DwMoveLink id='common.defend'>Вставать на защиту</DwMoveLink>, бросая +ЛОВ вместо +ТЕЛ.</p>
      </>
    ),
  },
  {
    id: 'monk.capstone.inner_world',
    name: 'Внутренний мир',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='monk.advanced.mind_peace'>Покой ума</DwMoveLink></p>
        <p><strong><DwMoveLink id='monk.start.meditation'>Медитируя</DwMoveLink></strong>, на 10+ выбери два вместо одного из списка <DwMoveLink id='monk.advanced.mind_peace'>Покоя ума</DwMoveLink> и ты можешь выбрать одно и то же дважды.</p>
      </>
    ),
  },
  {
    id: 'monk.capstone.steel_body',
    name: 'Тело из стали',
    text: (
      <>
          <p><em>Требуется</em>: <DwMoveLink id='monk.advanced.body_rock'>Каменные мышцы</DwMoveLink></p>
        <p><strong>Пока у тебя есть <DwMoveLink id='monk.start.meditation'>Течение</DwMoveLink></strong>, получи +2 брони.</p>
      </>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'monk',
    }),
  )
  .sort(sortByName)
