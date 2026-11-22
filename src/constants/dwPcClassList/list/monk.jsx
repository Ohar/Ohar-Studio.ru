const React = require('react')

module.exports = {
  id: 'monk',
  name: 'Монах',
  description: [
    `Тишина родного монастыря, усердные тренировки и долгие медитации, вкупе с отказом от некоторых земных слабостей, позволили тебе открыть в себе невиданный потенциал. Ты не служишь высшей силе и не пытаешься изменить законы мироздания — ты настроился на ритм этого мира и стал его частью.`,
    `Выйдя в мир, ты повидал множество людей — бродяг, убитых жизнью, богачей, купающихся в благах цивилизации, рыцарей, идущих на подвиг и подонков, готовых убить за красивую побрякушку. Но ты знаешь — всё это мелочи, песок, сыплющийся сквозь пальцы. Они живут, не замечая гармонии мира и не слышат его ритма. Они словно идут против бурного потока жизни, силой прокладывая себе путь.`,
    `Ты же сам — словно вода: можешь течь, а можешь разрушать. Возможно, если ты им поможешь, они поймут мир лучше?`,
  ],
  nameList: ['Куа-Чин', 'Лили', 'Летящая Ладонь', 'Утренний Ветер', 'Уйгуна', 'Тускул', 'Дохсун', 'Бэйбэй', 'Саяра', 'Ми-Йонг'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['мудрый', 'жадный', 'глубокий'],
    },
    {
      name: 'Причёска',
      variantList: ['бритая голова', 'длинная коса', 'повязка на голову'],
    },
    {
      name: 'Одежда',
      variantList: ['монашеское облачение', 'униформа мастера боевых искусств', 'свободная одежда'],
    },
    {
      name: 'Тело',
      variantList: ['подтянутое', 'татуированное', 'изящное'],
    },
  ],
  hpBonus: 18,
  damageDice: 8,
  striveList: [
    {
      name: 'Мастерство',
      text: 'Победи достойного противника без оружия.',
    },
    {
      name: 'Пилигрим',
      text: 'Открой для себя духовно значимое место.',
    },
    {
      name: 'Просветление',
      text: 'Раскрой истинную причину проблемы в мире.',
    },
  ],
  optionalQuestionList: [
    'Каково было место, где ты тренировал свои навыки? Кто был твоим учителем?',
    'Как другие люди обычно относятся к монахам?',
    'Что в твоей внешности или снаряжении символизирует твои обеты?',
    'Что больше всего искушает тебя нарушить, предать или отказаться от своих обетов?',
  ],
  backgroundIdList: [
    'monk.background.hermit',
    'monk.background.fighter',
    'monk.background.pacifist',
  ],
  startMoveIdList: [
    'monk.start.martial_arts',
    'monk.start.meditation',
    'monk.start.vows',
  ],
  advancedMoveToPickOnStart: {
    limit: 2,
    list: [
      'monk.advanced.dragon_claw',
      'monk.advanced.monkey_grip',
      'monk.advanced.mountain_stance',
      'monk.advanced.snake_bites',
      'monk.advanced.weapon_master',
    ],
  },
  advancedMoveIdList: [
    'monk.advanced.body_rock',
    'monk.advanced.chakra',
    'monk.advanced.fast_river_defence',
    'monk.advanced.flying_wind_fist',
    'monk.advanced.light_as_wind',
    'monk.advanced.mind_peace',
    'monk.advanced.body_peace',
    'monk.advanced.teacher_lessons',
    'monk.advanced.wandering_sage',
  ],
  capstoneMoveIdList: [
    'monk.capstone.reach_behind_the_veil',
    'monk.capstone.technique_learned',
    'monk.capstone.inner_world',
    'monk.capstone.flow_river_defence',
    'monk.capstone.steel_body',
  ],
}
