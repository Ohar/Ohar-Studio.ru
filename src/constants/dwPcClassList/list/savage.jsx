const React = require('react')

module.exports = {
  id: 'savage',
  name: 'Дикарь',
  description: [
    `Ты пришёл сюда из неизвестных земель с оружием в руке. Грабитель. Убийца.`,
    `Пусть маг колдует свои заклятия. Зачем нужна его магия? Ты знаешь, что железо отлично рубит мясо и кости. Пусть жрец клянётся в верности своему божку. Лучше бы ему оставить при себе эту чушь про верное служение. Ты — сам себе хозяин.`,
    `Ты пришёл сюда из далёких земель в поисках… чего? Славы? Богатства? Пролитой крови? Неважно. Они зовут тебя дикарём. Неотёсанным скотом. Пусть зовут. Их хлипкий мир законов и правил так мимолётен… Ты знаешь эту жизнь.`,
    `И умеешь брать от неё всё.`,
  ],
  nameList: ['Аннэйра', 'Барбозар', 'Верцингетто', 'Горм', 'Кловис', 'Коррин', 'Ксиа', 'Куа', 'Кхамизи', 'Люр', 'Нкоси', 'Присцилла', 'Сацер', 'Си-Йи', 'Силлиус', 'Сэн', 'Тра-раксес', 'Фафнир', 'Фраель', 'Хаефа', 'Ша-Шенна', 'Шар'],
  nickNameList: ['Бешеный', 'Бугай', 'Весёлый', 'Волосатый', 'Гигантский', 'Голодный', 'Грозный', 'Громила', 'Грустный', 'Дикий', 'Жадный', 'Жестокий', 'Костяной', 'Могучий', 'Мохнатый', 'Непобедимый', 'Победоносный', 'Прожорливый', 'Проклятый', 'Прославленный', 'Свирепый', 'Сильный', 'Свободный', 'Убийца'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['измученный', 'отчаянный', 'дикий', 'мрачный'],
    },
    {
      name: 'Приметы',
      variantList: ['татуировки', 'драгоценности', 'шрамирование', 'пирсинг костями'],
    },
    {
      name: 'Причёска',
      variantList: ['бритая голова', 'космы', 'грубая стрижка'],
    },
    {
      name: 'Одежда',
      variantList: ['обноски', 'шелка', 'трофейная (не по погоде)'],
    },
    {
      name: 'Фигура',
      variantList: ['мускулистая', 'долговязая', 'худощавая', 'приземистая'],
    },
  ],
  hpBonus: 20,
  damageDice: 10,
  striveList: [
    {
      name: 'Презрение',
      text: 'Оскорби персонажа Ведущего своим неотёсанным поведением.',
    },
    {
      name: 'Традиция',
      text: 'Научи кого-то путям или обычаям своего народа.',
    },
    {
      name: 'Честь',
      text: 'Сдержи обещание, данное персонажу Ведущего.',
    },
    {
      name: 'Жестокость',
      text: 'Брось на произвол судьбы кого-то слабее тебя.',
    },
    {
      name: 'Чистое разрушение',
      text: 'Бездумно уничтожь нечто ценное.',
    },
    {
      name: 'Власть над другими',
      text: 'Заставь других подчиняться.',
    },
    {
      name: 'Земные удовольствия',
      text: 'Жадно насладись комфортом, едой или напитками.',
    },
    {
      name: 'Завоевание',
      text: 'Захвати то, что тебе не принадлежит.',
    },
    {
      name: 'Богатство',
      text: 'Получи больше, чем тебе причиталось.',
    },
    {
      name: 'Слава',
      text: 'Сделай так, чтобы о тебе говорили.',
    },
  ],
  optionalQuestionList: [
    'Какие манеры ярче всего показывают что ты чужак в этих землях?',
    'Что тебе больше всего нравится в этих «цивилизованных землях»?',
    'Какая культурная норма «цивилизованных людей» тебе противна?',
    'Как люди этой страны реагируют на твой внешний вид?',
  ],
  backgroundIdList: [
    'savage.background.dying_nation',
    'savage.background.grown_at_war',
    'savage.background.wanderer',
  ],
  startMoveIdList: [
    'savage.start.hercules_desires',
    'savage.start.good_day_to_die',
  ],
  advancedMoveToPickOnStart: {
    limit: 2,
    list: [
      'savage.advanced.big_steps',
      'savage.advanced.impressive',
      'savage.advanced.muscle_mountain',
      'savage.advanced.reckless',
      'savage.advanced.unyielding_n_invulnerable',
    ],
  },
  advancedMoveIdList: [
    'savage.advanced.bloodlust',
    'savage.advanced.khan_of_khans',
    'savage.advanced.my_turn',
    'savage.advanced.rage',
    'savage.advanced.still_hungry',
    'savage.advanced.unbending',
    'savage.advanced.unstoppable',
    'savage.advanced.whatever_at_hand',
  ],
  capstoneMoveIdList: [
    'savage.capstone.magic_contempt',
    'savage.capstone.one_who_knocks',
    'savage.capstone.ravager',
    'savage.capstone.symbol_of_might',
    'savage.capstone.warcry',
  ],
  specialMoves: {
    title: '',
    list: [
      '',
    ]
  },
}
