import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import DwTag from '@/components/DwTag'
import sortByName from '@/utils/sortByName'
import generateDwPcClassPathById from '@/utils/generateDwPcClassPathById'
import { Link } from '@/components/NextLink'

export default [
  {
    id: 'ranger.background.watch',
    name: 'Дозорный',
    text: (
      <>
        <p><strong><DwMoveLink id='ranger.start.scout_ahead'>Разведывая впереди</DwMoveLink></strong>, выбери ещё один вариант, даже при 6−, и ты можешь задавать ещё и эти вопросы:</p>
        <ul>
          <li>Где мне лучше всего спрятаться или слиться с окружением?</li>
          <li>Где лучший для меня путь внутрь, наружу или сквозь?</li>
          <li>Что я могу увидеть такого, чего не видит никто другой?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.background.traveler',
    name: 'Путешественник',
    text: (
      <>
        <p>Ты побывал везде и всюду, забираясь дальше, чем многие могут себе представить.</p>
        <p><strong>Прибывая в место, которое ты уже посещал</strong> (решать тебе), скажи Ведущему — когда ты последний раз здесь был, и он расскажет, как это место изменилось с тех пор.</p>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о географии и поселениях</strong>, ты можешь бросать +МДР вместо +ИНТ. </p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink> в окружении природы</strong>, тебе не нужно тратить <DwTag id='supplies'>Припасы</DwTag>&nbsp;— опиши, что ты используешь вместо них.</p>
      </>
    ),
  },
  {
    id: 'ranger.background.hunter',
    name: 'Охотник',
    text: (
      <>
        <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о монстре</strong>, ты можешь бросать +МДР вместо +ИНТ. </p>
        <p><strong>Кроме того, выбери категорию существ, чьи повадки и поведение ты изучал</strong> (дикие орды, великаны и их родственники, драконы и их слуги, дварфы и их кланы и т. п.) и добавь следующий вопрос к ходу <DwMoveLink id='ranger.start.skirmisher'>Застрельщик</DwMoveLink>:</p>
        <ul>
          <li>Сражаюсь ли я с теми, чьи повадки изучал?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.start.scout_ahead',
    name: 'Разведать впереди',
    text: (
      <>
        <p>Когда ты <strong>уходишь, чтобы в одиночку разведать опасное место</strong>, опиши: как ты это делаешь, и брось +ЛОВ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— Ведущий опишет, с чем ты встретился и ты безопасно возвращаешься. Выбери три.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— то же самое, но выбери одно.</p>
            <ul>
              <li>Задай вопрос из списка хода <DwMoveLink id='common.discern_realities'>Изучить обстановку</DwMoveLink> о том, что там встретил (этот вариант можно выбирать несколько раз).</li>
              <li>Ты смог что-то оттуда принести. Ведущий скажет — что.</li>
              <li>Там ты создал себе какое-то преимущество на случай возвращения туда. Обсуди детали с Ведущим.</li>
              <li>Ты не оставил следов и не вызвал подозрений.</li>
            </ul>
          </li>
          <li>
            <p>На <strong>6−</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Ты вернулся, но привёл опасность за собой! Ведущий скажет — что за тобой пришло.</li>
              <li>Ты пропал без вести. Детали станут известны позже.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.start.skirmisher',
    name: 'Застрельщик',
    text: (
      <>
        <p><strong>Вступая в бой</strong>, ответь на вопросы:</p>
        <ol>
          <li>Правда ли, что у меня не <Link to={generateDwPcClassPathById('ranger', 'capacity')}>тяжёлая нагрузка</Link>, и не ношу <DwTag id='clumsy'>Неуклюжую</DwTag> броню?</li>
          <li>Разведал ли я эту опасность?</li>
          <li>Достаточно ли здесь места для манёвров?</li>
          <li>Намного ли враг больше меня размером?</li>
        </ol>
        <p>За каждый ответ «Да» получи 1 <em>Боеготовности</em>. В бою ты можешь тратить <em>Боеготовность</em> 1 к 1, чтобы:</p>
        <ul>
          <li>Привлечь внимание врага к себе и заманить его в невыгодное положение.</li>
          <li>Быстро сократить дистанцию до врага, не дав ему среагировать.</li>
          <li>Безопасно выйти из ближнего боя с врагом.</li>
          <li>Избежать опасности на поле боя, не <DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink>.</li>
        </ul>
        <p>Когда <strong>битва заканчивается</strong>, потеряй всю <em>Боеготовность</em>.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.handicrafter',
    name: 'Кустарщик',
    text: (
      <>
        <p>Жизнь научила тебя выживать с тем, что есть, и с тем, что ты можешь сделать сам.</p>
        <p><strong>Когда ты должен потратить <DwTag id='supplies'>Припасы</DwTag> ради боеприпасов </strong>(например, <DwMoveLink id='common.volley'>Давая залп</DwMoveLink>), ты можешь решить их не тратить.</p>
        <p>Ты не можешь сделать это снова, пока не <DwMoveLink id='common.set_camp'>Разобьёшь лагерь</DwMoveLink> или не <DwMoveLink id='common.recover'>Восстановишься</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.companion',
    name: 'Компаньон',
    text: (
      <>
        <p><strong>Тебя сопровождает зверь необычной верности и ума</strong>. У вас тесная связь и вы с ним можете общаться без слов. <strong>Обсуди его с Ведущим, <DwMoveLink id='ranger.special.create_companion'>определи его характеристики</DwMoveLink></strong> и запиши их ниже.</p>
        <p className='fill_place'/>
        <p>Получи ход <DwMoveLink id='ranger.special.faithful_to_the_end'>Верный до конца</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.disguise',
    name: 'Маскировка',
    text: (
      <>
        <p><strong>Выбери</strong> тип окружения (дикая природа, городские улицы, подземелья и пещеры и т. п.).</p>
        <p>Пока ты <strong>не двигаешься, находясь в выбранном окружении</strong>, тебя нельзя обнаружить ничем меньшим, чем сверхъестественным чувством или магией, пока ты не сделаешь что-то, что тебя выдаст (например, атакуешь).</p>
        <p><strong>Кроме того, имея <Link to={generateDwPcClassPathById('ranger', 'capacity')}><em>лёгкую</em> или <em>нормальную</em> нагрузку</Link> и двигаясь неспешно и осторожно</strong>, ты не создаёшь шума и не оставляешь следов.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.true_shot',
    name: 'Верный выстрел',
    text: (
      <>
        <p><strong>Тратя время на точный прицел и идеальный выстрел</strong>, либо нанеси урон, либо рискни и брось +ЛОВ.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери три.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери два.</p>
            <ul>
              <li>Игнорируй броню.</li>
              <li>Оглуши, стреножь или иначе помешай цели.</li>
              <li>Нанеси урон с преимуществом.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.advanced.pioneer',
    name: 'Первопроходец',
    text: (
      <p><strong>Когда путешествие заставляет тебя <DwMoveLink id='common.defy_danger'>Спасаться от угрозы</DwMoveLink> или <DwMoveLink id='common.fight_as_one'>Бороться как один</DwMoveLink></strong>, считай 6− как 7–9.</p>
    ),
  },
  {
    id: 'ranger.advanced.incredible_exemplar',
    name: 'Невероятный образец',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='ranger.advanced.companion'>Компаньон</DwMoveLink></p>
        <p>Ты можешь взять этот ход дважды. <strong>Выбирая этот ход</strong>, выбери ещё 2 <em>Особенности</em> своего <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.eclipse',
    name: 'Затмить солнце',
    text: (
      <>
        <p><strong><DwMoveLink id='common.volley'>Давая залп</DwMoveLink> оружием без свойства <DwTag id='reload'>Перезарядка</DwTag></strong>, ты можешь сделать сразу несколько выстрелов. Для этого потрать <DwTag id='supplies'>Припасы</DwTag> и выбери одно: </p>
        <ul>
          <li>Бросай урон с <DwTag id='advantage'>преимуществом</DwTag>.</li>
          <li>Твоя атака получает свойство <DwTag id='area'>По Области</DwTag>.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.advanced.predator',
    name: 'Хищник',
    text: (
      <>
        <p><strong><DwMoveLink id='common.discern_realities'>Изучая обстановку</DwMoveLink></strong>, ты можешь задавать ещё и эти вопросы:</p>
        <ul>
          <li>Кто или что здесь самая лёгкая добыча?</li>
          <li>В чём слабость или уязвимость цели?</li>
        </ul>
        <p><strong>Действуя на основе этой информации</strong>, ты можешь нанести +1к4 урона.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.big_hunt',
    name: 'Крупная дичь',
    text: (
      <p>TODO: <strong>Поражая слабое место <em>Большого</em> или <em>Огромного</em> существа</strong>, наноси +2  урона.</p>
    ),
  },
  {
    id: 'ranger.advanced.mental_map',
    name: 'Ментальная карта',
    text: (
      <>
        <p><strong>Ты всегда можешь проследить собственные шаги и точно определяешь расстояния и направления</strong>. Возможно, ты не знаешь пути вперёд, но всегда можешь найти дорогу назад.</p>
        <p><strong>Вспоминая место, в котором ты был или которое наблюдал</strong>, ты можешь ретроспективно <DwMoveLink id='common.discern_realities'>Изучить обстановку</DwMoveLink>, как если бы находился там прямо сейчас.</p>
      </>
    ),
  },
  {
    id: 'ranger.advanced.wild_empathy',
    name: 'Дикая эмпатия',
    text: (
      <p>Ворчание, лай, чириканье и крики зверей&nbsp;— это для тебя своего рода язык. <strong>Ты можешь понимать их намерения</strong> и доносить до них несложные идеи.</p>
    ),
  },
  {
    id: 'ranger.advanced.tracking',
    name: 'Охота и слежка',
    text: (
      <>
        <p><strong><DwMoveLink id='common.discern_realities'>Изучая обстановку</DwMoveLink>, чтобы найти следы или изучить оставленные проходящими существами знаки</strong>, ты можешь спросить <em>«Что здесь недавно произошло?»</em> бесплатно, даже на 6−.</p>
        <p><strong>Изучая чьи-то следы</strong>, брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— выбери два.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— выбери одно.</p>
            <ul>
              <li>Ты можешь идти по следам, пока следы или местность значительно не изменятся.</li>
              <li>Ты можешь задать вопрос о добыче и получить честный и полезный ответ.</li>
              <li>Ты понимаешь примерный возраст следов.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.advanced.trapper',
    name: 'Ловчий',
    text: (
      <>
        <p><strong>Выбирая и подготавливая место ночёвки или отдыха группы,</strong> не трать <DwTag id='supplies'>Припасы</DwTag>.</p>
        <p><strong>Тратя время на подготовку места</strong> (поляны, этажа здания, переулка и т. п.), ты можешь потратить <DwTag id='supplies'>Припасы</DwTag> и получить 1 <em>Предосторожности</em>. Если ты хорошо знаешь это место и его опасности, вместо этого получи 2 <em>Предосторожности</em>.</p>
        <p><strong>Когда кто-то проходит через это место или его настигает опасность</strong>, ты можешь потратить 1 <em>Предосторожности</em> и раскрыть заранее подготовленную тобой простую защиту, трюк или хитрость. Расскажи, почему ты подготовил именно её.</p>
      </>
    ),
  },
  {
    id: 'ranger.capstone.fast_response',
    name: 'Молниеносная реакция',
    text: (
      <p>Если тебя <strong>повалили, застали врасплох или от получения удара твои <DwTag id='hp'>ОЗ</DwTag> упали до 0</strong>, ты оказываешься достаточно быстрым, чтобы нанести ответный удар. Нанеси урон любому врагу в пределах дальности своего оружия.</p>
    ),
  },
  {
    id: 'ranger.capstone.way_paver',
    name: 'Прокладывающий путь',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='ranger.advanced.pioneer'>Первопроходец</DwMoveLink></p>
        <p><strong>Когда путешествие заставляет тебя <DwMoveLink id='common.defy_danger'>Спасаться от угрозы</DwMoveLink> или <DwMoveLink id='common.fight_as_one'>Бороться как один</DwMoveLink></strong>, не бросай вовсе, считай что у тебя всегда 10+.</p>
      </>
    ),
  },
  {
    id: 'ranger.capstone.master_ranger',
    name: 'Мастер-следопыт',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='ranger.advanced.tracking'>Охота и слежка</DwMoveLink></p>
        <p><strong>Быстро оглядывая следы</strong>, ты можешь спросить <em>«Что здесь недавно произошло?»</em> и получить честный ответ&nbsp;— тебе не нужно <DwMoveLink id='common.discern_realities'>Изучать обстановку</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'ranger.capstone.legendary_beast',
    name: 'Легендарный зверь',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='ranger.advanced.incredible_exemplar'>Невероятный образец</DwMoveLink></p>
        <p>Ты можешь выбирать этот ход дважды.</p>
        <p><strong>Выбирая этот ход,</strong> выбери одно:</p>
        <ul>
          <li>Твой компаньон становится <em>Исключительным</em> (бросай +2 вместо +1).</li>
          <li>Он получает +4 <DwTag id='hp'>ОЗ</DwTag> и +1 брони.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.capstone.alpha',
    name: 'Альфа',
    text: (
      <>
        <p><em>Требуется:</em> <DwMoveLink id='ranger.advanced.wild_empathy'>Дикая эмпатия</DwMoveLink>, <DwMoveLink id='druid.start.spirit_language'>Язык духов</DwMoveLink> или иная способность общаться с животными или духами.</p>
        <p><strong>Утверждая своё господство над зверем или духом природы</strong>, брось +МДР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— ты получаешь преимущество на следующий ход против него и Ведущий выбирает одно.</li>
          <li>
            <p>На <strong>7–9</strong>&nbsp;— Ведущий выбирает одно.</p>
            <ul>
              <li>Он сразится с тобой за господство.</li>
              <li>Он ускользнёт или убежит и затем будет избегать тебя.</li>
              <li>Он примет твой авторитет, как минимум на время.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.special.faithful_to_the_end',
    name: 'Верный до конца',
    text: (
      <>
        <p><strong>Когда у твоего <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink> становится 0 <DwTag id='hp'>ОЗ</DwTag></strong>, брось +ничего (с преимуществом, если у него есть <em>Верность</em>).</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— он вернётся в строй, как только восстановит <DwTag id='hp'>ОЗ</DwTag>.</li>
          <li>На <strong>7–9</strong>&nbsp;— он получает свойство <em>Ранен</em>, пока его не исцелят.</li>
          <li>На <strong>6−</strong>&nbsp;— он получает свойство <em>Ранен</em> и вскоре умрёт, если его никто не спасёт.</li>
        </ul>
        <p><strong>Если твой компаньон погиб</strong>, поработай с Ведущим, чтобы решить, что делать дальше. Например:</p>
        <ul>
          <li><DwMoveLink id='common.make_a_plan'>Придумай план</DwMoveLink>, как найти / приручить / натренировать нового. Может быть, найти замену будет не очень сложно?</li>
          <li>Ведущий может позволить тебе поменять все взятые ходы компаньона на другие ходы (может быть не все сразу).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ranger.special.create_companion',
    name: 'Создание компаньона',
    text: (
      <>
        <p><strong>Обсуди с Ведущим своего <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink></strong>, затем определи его характеристики, пройдя по списку ниже.</p>
        <ol>
          <li><strong>Выбери животное</strong> (дрейк, лиса, лошадь, медведь, ястреб, ______________).</li>
          <li>У него <strong>4 <DwTag id='hp'>ОЗ</DwTag></strong> и <strong>Урон к4</strong> (<DwTag id='hand'>Рука</DwTag>). Считай его <em>Последователем</em> c <em>Верностью</em> 3.</li>
          <li>
            <p>Выбери пять (можно повторяться)</p>
            <ul>
              <li>+1 брони</li>
              <li>+3 <DwTag id='hp'>ОЗ</DwTag></li>
              <li><DwTag id='forceful'>Мощный</DwTag></li>
              <li><DwTag id='messy'>Месиво</DwTag></li>
              <li><DwTag id='piercing'>Пробивание +1</DwTag></li>
              <li>Увеличь кость урона (максимум до к10)</li>
              <li>Увеличь дальность (максимум до <DwTag id='reach'>Удара копья</DwTag>)</li>
            </ul>
          </li>
          <li>Придумай пять <em>Особенностей</em> своего <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink> и запиши их. Когда твой <DwMoveLink id='ranger.advanced.companion'>Компаньон</DwMoveLink> совершает ход, подходящий одному из его <em>Особенностей</em>, получи +1 на бросок.</li>
          <li>
            <p>Выбери <em>Инстинкт</em> <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink>.</p>
            <ul>
              <li>Бросаться в погоню.</li>
              <li>Доминировать и угрожать.</li>
              <li>Забавно проказничать.</li>
              <li>Любопытно отвлекаться.</li>
              <li>Набивать живот.</li>
              <li>Нестись напролом.</li>
              <li>Пугаться и прятаться.</li>
              <li>__________________________</li>
            </ul>
          </li>
          <li>
            <p>Выбери <em>Цену</em> <DwMoveLink id='ranger.advanced.companion'>Компаньона</DwMoveLink>.</p>
            <ul>
              <li>Игры, уход, тренировки, внимание.</li>
              <li>Свободное время для самого себя, свобода бродить.</li>
              <li>Уютное место для сна, комфорт, обильная еда.</li>
              <li>__________________________</li>
            </ul>
          </li>
        </ol>
      </>
    ),
    note: (
      <p>Примеры <em>Особенностей</em>: агрессивный, безустанный, бесстрашный, быстрый, вонючий, вороватый, выносливый, защитник, зоркий, копающий, красивый, крепкий, ловкий, лёгкий характер, милый, мимикрия, осторожный, острый слух, прожорливый, раздражающий, скалолаз, скрытный, спокойный, стайный, терпеливый, ужасающий, умный, чуткий нюх, юркий.</p>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'ranger',
    }),
  )
  .sort(sortByName)
