import React from 'react'

import DwMoveLink from '@/components/DwMoveLink'
import DwTag from '@/components/DwTag'
import sortByName from '@/utils/sortByName'

export default [
  {
    id: 'shorty.background.hefty_body',
    name: 'Дюжие телом',
    text: (
      <>
        <p><strong>Увеличь свой максимум <DwTag id='hp'>ОЗ</DwTag> на 2</strong>.</p>
        <p><strong>Один раз в сессию, получая <DwTag id='trauma'>Травму</DwTag></strong>, ты можешь решить не получать её, а <strong>обычные яды и болезни</strong> ты переносишь легче и быстрее.</p>
      </>
    ),
  },
  {
    id: 'shorty.background.brave_heart',
    name: 'Храбрые сердцем',
    text: (
      <p><strong>Вступая в бой с ужасающим врагом или врагом, который больше тебя</strong>, получи 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink> перед началом конфликта и +1 брони, пока ты сражаешься.</p>
    ),
  },
  {
    id: 'shorty.background.small_among_small',
    name: 'Мелкие среди мелких',
    text: (
      <>
        <p>Твой народ меньше и легче даже других малых народов. <strong>Тебя можно без проблем носить или бросать</strong>.</p>
        <p><strong>Двигаясь осторожно и неспешно</strong>, ты не производишь шума и можешь ходить по нестабильным поверхностям, не <DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink>.</p>
      </>
    ),
  },
  {
    id: 'shorty.start.big_world_small_part',
    name: 'Малая часть большого мира',
    text: (
      <>
        <p><strong>Ты&nbsp;— часть малого народа</strong>, который ведёт довольно скромное существование. <strong>Назови и опиши</strong> свой народ, заполнив все пропуски ниже. Ты и твой народ небольшого роста, примерно <strong>от полуметра до метра высотой</strong>. Это может быть как проблемой, так и благом. Некоторое снаряжение других рас может попросту быть слишком большим для тебя, но, вместе с тем, мало кто увидит в тебе угрозу, а твоя смекалка и прыткость, возможно, позволят тебе вписать имя своего народа в большую историю.</p>
        <ul>
          <li><strong>Внешность твоего народа</strong> можно описать как _________________ (толстые низкие люди, крысолюды, двуногие лисицы и т. п/).</li>
        <li><strong>Твой народ называет себя</strong> _________________ (завране, хины, гарионцы, дети леса и т. п.).</li>
        <li>(необязательно) <strong>Распространённое разговорное название твоего народа</strong> _________________ (полурослики, ушастые, бегунцы, златовники и т. п.).</li>
        </ul>
        <p><strong>Опиши две особенности или традиции своего народа, которыми он известен</strong>&nbsp;— одну хорошую и одну плохую и запиши их в пропуски ниже. Например: <em>добротой и неблагонадёжностью,</em> <em>умом и коварством</em>, <em>навыками выживания и ужасными манерами</em>, <em>боевой выучкой и поеданием плоти врагов</em> и т. п.</p>
        <ul>
          <li><strong>Среди других рас твой народ известен</strong> _________________ и _________________</li>
        </ul>
        <p><strong>Один раз в сессию, когда ты совершаешь ход и обстоятельства подходят под то, в чём твой народ хорош</strong>, считай 6− как 7–9, а 7–9 как 10+.</p>
        <p><strong>Один раз в сессию, когда дурная молва о твоём народе оправдывает себя</strong>, запиши опыт.</p>
      </>
    ),
  },
  {
    id: 'shorty.start.small_agility',
    name: 'Проворство малых',
    text: (
      <p><strong>Когда тебя превосходят числом или враг больше тебя</strong>, ты получаешь преимущество на любой ход, чтобы спрятаться, сбежать или прокрасться мимо.</p>
    ),
  },
  {
    id: 'shorty.start.savvy',
    name: 'Смекливость',
    text: (
      <>
        <p><strong><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink> или <DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink>, ты можешь рассказать кому-то байку о том, как в прошлом ты выпутался из передряги, о родном доме, притчу твоего народа, или попросить об этом собеседника</strong>. Делая так, потеряй всю <em>Смекалку</em> и брось +ТЕЛ или +ХАР.</p>
        <ul>
          <li>На <strong>10+</strong>&nbsp;— получи 3 <em>Смекалки</em>.</li>
          <li>На <strong>7–9</strong>&nbsp;— получи 2 <em>Смекалки</em>.</li>
          <li>На <strong>6−</strong>&nbsp;— всё равно получи 1 <em>Смекалки</em>, но Ведущий делает ход.</li>
        </ul>
        <p><strong>Ты можешь тратить <em>Смекалку</em></strong> 1 к 1, чтобы:</p>
        <ul>
          <li>Ты или союзник неподалёку избавился от страха, сомнений или порчи (даже самая сильная порча на время ослабнет).</li>
          <li>Выбрось осторожность куда подальше: ты получаешь преимущество на любой ход, но считай 10+ как 7–9.</li>
          <li>Действуя неожиданно, ты захватишь врага врасплох.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'shorty.advanced.troublemaker',
    name: 'Смутьян',
    text: (
      <p><strong>Когда ты делаешь что-то настолько невероятно глупое, что все просто смотрят на тебя в неверии</strong>, получи 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink>. Поверь, она тебе понадобится.</p>
    ),
  },
  {
    id: 'shorty.advanced.tavern_gossip',
    name: 'Сплетни в таверне',
    text: (
      <p><strong><DwMoveLink id='common.spout_lore'>Копаясь в памяти</DwMoveLink> о том, чего ты никогда не видел</strong>, бросай с преимуществом, и расскажи о том, кто рассказал тебе эту невероятную историю.</p>
    ),
  },
  {
    id: 'shorty.advanced.small_world',
    name: 'Маленький мир',
    text: (
      <p><strong>Ища свой народ в местах, где его логично было бы найти</strong>, ты всегда найдёшь хоть кого-нибудь и они всегда готовы оказать тебе помощь, но могут попросить что-то взамен.</p>
    ),
  },
  {
    id: 'shorty.advanced.nimble_feet',
    name: 'Ловкие ноги',
    text: (
      <p><strong><DwMoveLink id='common.defy_danger'>Спасаясь от угрозы</DwMoveLink> тем, что ты убираешься с её пути</strong>, на 7+ ты можешь спрятаться или избежать обнаружения обычными средствами от кого-то, кто больше тебя, до тех пор, пока он может отвлечься на кого-то ещё.</p>
    ),
  },
  {
    id: 'shorty.advanced.drop_the_act',
    name: 'Ломать комедию',
    text: (
      <p><strong>Когда ты <DwMoveLink id='common.parley'>Договариваешься</DwMoveLink>, давя на жалость или пресмыкаясь</strong>, бросай с преимуществом.</p>
    ),
  },
  {
    id: 'shorty.advanced.tougher',
    name: 'Крепче, чем кажется',
    text: (
      <>
        <p><strong>Пока у тебя есть <DwMoveLink id='shorty.start.savvy'>Смекалка</DwMoveLink></strong>, у тебя +1 брони.</p>
        <p><strong>Делая <DwMoveLink id='common.last_breathe'>Последний вздох</DwMoveLink></strong>, потрать всю <DwMoveLink id='shorty.start.savvy'>Смекалку</DwMoveLink>, чтобы получить преимущество.</p>
      </>
    ),
  },
  {
    id: 'shorty.advanced.underrated',
    name: 'Недооценка',
    text: (
      <>
        <p><strong>Пока ты избегаешь открытой враждебности</strong>, враги не будут считать тебя угрозой.</p>
        <p><strong>Первый раз совершая ход против того, кто тебя недооценивает</strong>, бросай с преимуществом.</p>
      </>
    ),
  },
  {
    id: 'shorty.advanced.prick',
    name: 'Укол',
    text: (
      <>
        <p><strong><DwMoveLink id='common.hack_n_slash'>Рубя и кромсая</DwMoveLink> и получая 7+</strong>, ты можешь потратить 1 <DwMoveLink id='shorty.start.savvy'>Смекалку</DwMoveLink> и выбрать одно:</p>
        <ul>
          <li>Пользуясь замешательством и хаосом, ты воруешь у врага что-то небольшое.</li>
          <li>Твой враг спотыкается или падает.</li>
          <li>Твой урон получает преимущество.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'shorty.advanced.fell_not_out',
    name: 'Упал, но не выбыл',
    text: (
      <>
        <p><strong>Получая урон, несмотря на все попытки его избежать</strong>, ты можешь решить получить лишь половину урона (округляя вниз) и выбрать одно:</p>
        <ul>
          <li>Ты теряешь 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink>.</li>
          <li>Ты чего-то лишаешься (хватки, позиции, времени и т. п).</li>
          <li>У тебя ломается что-то из снаряжения.</li>
          <li>Ты ненадолго выбываешь из сцены.</li>
        </ul>
        <p><strong>Чтобы ты ни выбрал</strong>, результат опишет Ведущий.</p>
      </>
    ),
  },
  {
    id: 'shorty.advanced.pull_yourself',
    name: 'Собраться с силами',
    text: (
      <>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink>, ты можешь потратить 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink></strong> вместо траты <DwTag id='supplies'>Припасов</DwTag>.</p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink>, ты можешь получить 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink></strong> вместо восстановления ОЗ.</p>
      </>
    ),
  },
  {
    id: 'shorty.advanced.cultural_exchange',
    name: 'Культурный обмен',
    text: (
      <p><strong><DwMoveLink id='common.set_camp'>Разбивая лагерь</DwMoveLink> и занимаясь готовкой</strong>, ты можешь потратить дополнительные <DwTag id='supplies'>Припасы</DwTag> или 1 <DwMoveLink id='shorty.start.savvy'>Смекалки</DwMoveLink> и приготовить своё народное блюдо на всю группу&nbsp;— опиши его. <strong>Любой, кто его отведает</strong>, восстановит дополнительные 1к6 ОЗ.</p>
    ),
  },
  {
    id: 'shorty.advanced.help',
    name: 'Помогите!',
    text: (
      <p><strong>Когда союзник спасает тебя от опасности</strong>, отметь опыт.</p>
    ),
  },
  {
    id: 'shorty.advanced.second_breakfast',
    name: 'Второй завтрак',
    text: (
      <>
        <p><strong>Покидая поселение после того, как ты провёл в нём некоторое время</strong>, ты можешь <em>«неожиданно»</em> обнаружить у себя 1к3 <DwTag id='supplies'>Припасов</DwTag>. Расскажи, откуда ты их достал и каким образом.</p>
        <p><strong><DwMoveLink id='common.recover'>Восстанавливаясь</DwMoveLink></strong>, ты можешь потратить дополнительные <DwTag id='supplies'>Припасы</DwTag>, чтобы восстановить +1к6 ОЗ. </p>
      </>
    ),
  },
  {
    id: 'shorty.capstone.little_hero',
    name: 'Маленький герой',
    text: (
      <p><strong>Бросаясь в опасность, чтобы <DwMoveLink id='common.defend'>Защитить</DwMoveLink> кого-то</strong>, считай 6− как 7–9, а 7–9 как 10+. <strong>Кроме того</strong> ты можешь использовать <DwMoveLink id='shorty.start.savvy'>Смекалку</DwMoveLink> вместо <DwMoveLink id='common.defend'>Готовности</DwMoveLink>.</p>
    ),
  },
  {
    id: 'shorty.capstone.i_can_do_this_all_day',
    name: 'Да мы только начали',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='shorty.advanced.fell_not_out'>Упал, но не выбыл</DwMoveLink></p>
        <p><strong>Когда ты используешь ход <DwMoveLink id='shorty.advanced.fell_not_out'>Упал, но не выбыл</DwMoveLink></strong>, получи <DwTag id='advantage'>Преимущество</DwTag> на следующий ход против источника урона и твоя следующая атака нанесёт +1к4 урона.</p>
      </>
    ),
  },
  {
    id: 'shorty.capstone.slither_snake',
    name: 'Скользкий как уж',
    text: (
      <p><strong>Если тебя схватили, сковали, или ты застрял</strong>, ты можешь потратить 1 <DwMoveLink id='shorty.start.savvy'>Смекалку</DwMoveLink> и высвободиться.</p>
    ),
  },
  {
    id: 'shorty.capstone.cute_face',
    name: 'Милая мордашка',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='shorty.advanced.small_world'>Маленький мир</DwMoveLink></p>
        <p><strong>Когда ты дружелюбно ведёшь себя в поселении</strong>, твоей улыбки будет достаточно, чтобы получать хорошие сделки, бесплатную еду и комфортабельное проживание. Местные всегда будут к тебе открыты, дружелюбны, и постараются помочь, пока ты не дашь им повод перестать это делать.</p>
      </>
    ),
  },
  {
    id: 'shorty.capstone.contagious_fervor',
    name: 'Заразительный запал',
    text: (
      <p><strong>Когда ты используешь <em>Смекливость</em> и получаешь 12+</strong>, союзники тоже получают 1 <DwMoveLink id='shorty.start.savvy'>Смекалку</DwMoveLink> и могут тратить её любыми доступными тебе способами.</p>
    ),
  },
  {
    id: 'shorty.capstone.small_but_daring',
    name: 'Мал, да удал',
    text: (
      <p><strong>Когда у тебя есть <DwMoveLink id='shorty.start.savvy'>Смекалка</DwMoveLink> и ты страдаешь от магических зачарования, страха или контроля разума</strong>, игнорируй эти эффекты. Даже самые мощные чары будут значительно ослаблены.</p>
    ),
  },
  {
    id: 'shorty.capstone.folk_hero',
    name: 'Народный герой',
    text: (
      <>
        <p><em>Требуется</em>: <DwMoveLink id='shorty.advanced.small_world'>Маленький мир</DwMoveLink></p>
        <p><strong>Впервые (после взятия этого хода) встретив представителей своего народа</strong>, ты будешь ритуально отмечен (опиши отметку ниже) как чемпион своего народа. <strong>Твой народ</strong> будет относится к тебе с большим уважением.</p>
        <p className='fill_place'/>
        <p><strong>Ты можешь заявлять о своём титуле</strong> перед теми, кто больше тебя, и они станут считать тебя ровней (и не будут <DwMoveLink id='shorty.advanced.underrated'>Недооценивать</DwMoveLink>). Немногие, разбирающиеся в твоей культуре, могут сразу распознать тебя как героя своего народа, и относиться соответствующе.</p>
        <p><strong>Ты можешь <DwMoveLink id='shorty.advanced.drop_the_act'>Ломать комедию</DwMoveLink> в том числе и заявляя о своём титуле</strong>. Однако после этого присутствующие станут считать тебя ровней (и не будут <DwMoveLink id='shorty.advanced.underrated'>Недооценивать</DwMoveLink>).</p>
      </>
    ),
    note: (
      <p><strong>Примеры ритуальной отметки</strong>: особая раскраска, татуировка, шрамирование, знаки на одежде или снаряжении.</p>
    ),
  },
]
  .map(
    move => ({
      ...move,
      classId: 'shorty',
    }),
  )
  .sort(sortByName)
