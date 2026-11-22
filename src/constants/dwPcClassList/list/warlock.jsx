const React = require('react')

module.exports = {
  id: 'warlock',
  name: 'Колдун',
  description: [
    `Все они — кто тратит бесценные годы своей жизни на тренировки и корпение над книгами — просто заблудшие овцы. Дети, играющие в грязи. Ты же знаешь как заполучить настоящую силу. Там, за Вуалью этого мира, существуют Они — создания необозримой мощи, те, кого не силах понять жалкий разум человека. Но ты смог достучаться до крохи сознания Того, Кто Бредёт В Пустоте, смог коснуться его безграничного сознания, и уже никогда не станешь прежним.`,
    `Если бы они знали хотя бы кроху того, что знаешь ты, они сошли бы с ума. Ты видел такое, от чего крестьянин умер бы на месте, а учёный муж ушёл в монастырь. Города из плоти, вывернутые наизнанку. Реальность из бесконечных пещер, уходящих во все стороны. Бездна, настолько глубокая, что она разумна. Безумные кристаллы, поедающие мысли. И всё это — лишь часть Правды.`,
    `Ритуальный кинжал, подготовленная жертва, пустая чаша. Звёзды встали в ряд. Ритуал готов. Осталось лишь сделать надрез…`,
  ],
  nameList: ['Алатар', 'Беннафолк', 'Лилит', 'Магнус', 'Минерва', 'Фабиан', 'Фобиус', 'Элифас'],
  featureList: [
    {
      name: 'Глаза',
      variantList: ['налитые кровью', 'разномастные', 'светящиеся', 'завязанные'],
    },
    {
      name: 'Причёска',
      variantList: ['нечёсаные волосы', 'татуированный скальп', 'глубокий капюшон'],
    },
    {
      name: 'Одежда',
      variantList: ['тщательно ухоженная', 'чужеродная', 'исключительно вычурная',],
    },
    {
      name: 'Отметина Покровителя',
      variantList: ['отсутствующая тень', 'холодная кожа', 'рожки'],
    },
  ],
  hpBonus: 16,
  damageDice: 6,
  striveList: [
    {
      name: 'Предвестник',
      text: 'Расширь влияние своего Покровителя среди смертных.',
    },
    {
      name: 'Мифы',
      text: 'Раскрой часть утраченного знания.',
    },
    {
      name: 'Подчинение',
      text: 'Стань более влиятельным или известным за чей-то счёт.',
    },
  ],
  optionalQuestionList: [
    'Держишься ли ты в тени из-за своего Покровителя? Почему?',
    'Что твой Покровитель обещал тебе?',
    'Как твой Покровитель к тебе относится?',
    'О каких мелочах просит тебя твой Покровитель, чтобы ты соблюдал договор?',
  ],
  backgroundIdList: [
    'warlock.background.chosen_one',
    'warlock.background.cultist',
    'warlock.background.seeker',
  ],
  startMoveIdList: [
    'warlock.start.contract',
    'warlock.start.hex',
    'warlock.start.servant',
    'warlock.start.dark_rite',
  ],
  advancedMoveIdList: [
    'warlock.advanced.ancient_sign',
    'warlock.advanced.bewitch',
    'warlock.advanced.blue_black',
    'warlock.advanced.forbidden_knowledge',
    'warlock.advanced.omen',
    'warlock.advanced.sheep_clothing_wolf',
    'warlock.advanced.snake_cunning',
    'warlock.advanced.spill_blood',
    'warlock.advanced.stars_in_line',
  ],
  capstoneMoveIdList: [
    'warlock.capstone.curse',
    'warlock.capstone.unlimited_devotion',
    'warlock.capstone.blade_of_worthy',
    'warlock.capstone.door_to_nowhere',
  ],
  specialMoves: {
    title: '',
    list: [
      '',
    ]
  },
}
