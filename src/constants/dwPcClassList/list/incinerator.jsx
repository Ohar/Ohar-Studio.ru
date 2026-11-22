const React = require('react')

module.exports = {
  id: 'incinerator',
  name: 'Испепелитель',
  description: [
    `Некоторые люди умоляют богов дать им силу, как последние идиоты; другие, больно умные, читают книги. Остальные, тренируются с мечом или в переговорах. Но не ты. Почему-то, как-то, ты нашёл силу другим путём, путём идущим через боль и огонь. Ты принёс жертву, тут и там, добровольную жертву, чтобы получить мощь за пределами сил обычных смертных.`,
    `И эта мощь так, так сладка.`,
    `Теперь ты непредсказуем. Неудержимый огонь, горящий со страстью и оставляющий только пепел позади. Все остальные тоже чувствуют это; твой огонь разжигает их, наполняя твоих товарищей по приключениям фурором и осветляя жизни каждого бродяги и леди, которым посчастливилось встретиться с тобой. Ты никогда не чувствовал себя более живым! И что с того, что проблемы преследуют тебя по пятам? Ещё больше причин жить на полную катушку, ведь так?`,
    `Живи быстро, умри молодым, и убедись, что ты не будешь тем неудачником, кто будет убирать потом весь этот бардак!`,
  ],
  nameList: ['Агаша', 'Адур', 'Едкая Смоль', 'Игнис', 'Йон', 'Калил', 'Кхалва', 'Омэн', 'Опаленная Чешуя', 'Пепельный Коготь', 'Пламя на Курганах', 'Сердце из Серы', 'Соломон', 'Тимоти', 'Тлеющая Плеть', 'Угольный Изверг', 'Угольный Клык', 'Умлило', 'Фатия', 'Фитиль', 'Харальд', 'Хико', 'Ходящий по Огням', 'Элизабет', 'Яйна'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['тленный', 'тёплый', 'испепеляющий'],
    },
    {
      name: 'Кожа',
      variantList: ['странное клеймо', 'ритуальные шрамы', 'идеальная кожа'],
    },
    {
      name: 'Голос',
      variantList: ['скрипящий', 'шепчущий', 'ревущий'],
    },
    {
      name: 'Манера',
      variantList: ['властная', 'маниакальная', 'едва скрываемая ярость'],
    },
  ],
  hpBonus: 18,
  damageDice: 8,
  striveList: [
    {
      name: 'Клеймённый огнём',
      text: 'Распространи новую, опасную идею.',
    },
    {
      name: 'Уничтожение',
      text: 'Полностью уничтожь что-то важное или имеющее большое значение (не обязательно физический объект).',
    },
    {
      name: 'Мученик',
      text: 'Свободно жертвуй собой или частью себя, чтобы добиться хорошего результата.',
    },
    {
      name: 'Провокация',
      text: 'Подтолкни кого-то к спонтанному, незапланированному действию.',
    },
    {
      name: 'Голод',
      text: 'Истрать важный ресурс, не считаясь с другими.',
    },
    {
      name: 'Страсть',
      text: 'Принеси недобровольную жертву пламени.',
    },
  ],
  backgroundIdList: [
    'incinerator.background.dragon_blood',
    'incinerator.background.phoenix_soul',
    'incinerator.background.infernal_link',
  ],
  optionalQuestionList: [
    'Как и когда пламя в первый раз позвало тебя?',
    'Как ты научился своим способностям?',
    'Что ты НЕ хочешь жертвовать?',
    'Как ты сдерживаешь пламя внутри себя?',
  ],
  startMoveIdList: [
    'incinerator.start.fire_brand',
    'incinerator.start.flame_fuel',
    'incinerator.start.flame_marked',
    'incinerator.start.fire_up',
  ],
  advancedMoveIdList: [
    'incinerator.advanced.alike_moths',
    'incinerator.advanced.burns_twice',
    'incinerator.advanced.candle_in_the_dark',
    'incinerator.advanced.consuming_flame',
    'incinerator.advanced.firestarter',
    'incinerator.advanced.hand_made',
    'incinerator.advanced.unquenchable',
    'incinerator.advanced.wildfire',
    'incinerator.advanced.wisdom_of_the_flame',
    'incinerator.advanced.zuko_style',
  ],
  capstoneMoveIdList: [
    'incinerator.capstone.burn_at_two_ends',
    'incinerator.capstone.burn_with_me',
    'incinerator.capstone.inferno',
    'incinerator.capstone.let_it_fire',
    'incinerator.capstone.purifying_flame',
    'incinerator.capstone.see_the_heart',
    'incinerator.capstone.walking_torch',
  ],
}
