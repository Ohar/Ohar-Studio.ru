const React = require('react')

module.exports = {
  id: 'shorty',
  name: 'Малый народ',
  description: [
    `Не все народы велики и могучи, с огромными городами и историей, уходящей в древность, героями в блестящих доспехах, и сотрясающими мир событиями. Много народов живут сами для себя, небольшими, пусть и разбросанными по свету, общинами, не оставляя значимого следа в истории. О них не пишут легенды и не слагают песен, их предки не сразили драконов и не изгнали древнее зло, но они — такая же часть мира, как и все остальные.`,
    `Из-за этого и небольшого роста их могут недооценивать или вовсе не воспринимать всерьёз. Кто вообще может себе представить крысолюда-дворянина? Абсурд. Такого просто не бывает. Так скажут многие, и будут почти всегда правы. Но истории о героях, пусть и приукрашены, учат тому, что предугадать все повороты судьбы никому не дано.`,
  ],
  nameList: ['Гэди', 'Жмых', 'Коррин', 'Кролик', 'Лазам Камненорка', 'Освальд', 'Придира', 'Сникч Тёмная Кость', 'Хик Тихоспин', 'Ядокус Брукхаус'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['хитрый', 'умный', 'пронзительный'],
    },
    {
      name: 'Лицо',
      variantList: ['звериная мордочка', 'вьющиеся волосы', 'закрытое капюшоном лицо'],
    },
    {
      name: 'Одежда',
      variantList: ['повседневная', 'дорожная', 'странная'],
    },
    {
      name: 'Тело',
      variantList: ['пухлое', 'жилистое', 'покрытое шерстью'],
    },
  ],
  hpBonus: 16,
  damageDice: 4,
  striveList: [
    {
      name: 'Надежда',
      text: 'Подбодри или дай надежду тому, кто в этом нуждается.',
    },
    {
      name: 'Страсть к путешествиям',
      text: 'Переживи что-то, о чём ты сможешь написать увлекательную историю, и возьми с собой сувенир, чтобы доказать что это действительно произошло.',
    },
    {
      name: 'Озорник',
      text: 'Уклонись от ответственности или последствий твоих действий.',
    },
    {
      name: 'Большое сердце',
      text: 'Подвергни себя опасности, чтобы кому-то помочь.',
    },
    {
      name: 'Порок',
      text: 'Создай проблемы из-за потакания своим капризам или праздности.',
    },
  ],
  backgroundIdList: [
    'shorty.background.hefty_body',
    'shorty.background.brave_heart',
    'shorty.background.small_among_small',
  ],
  startMoveIdList: [
    'shorty.start.small_agility',
    'shorty.start.big_world_small_part',
    'shorty.start.savvy',
  ],
  advancedMoveToPickOnStart: {
    limit: 2,
    list: [
      'shorty.advanced.nimble_feet',
      'shorty.advanced.small_world',
      'shorty.advanced.tavern_gossip',
      'shorty.advanced.troublemaker',
    ],
  },
  advancedMoveIdList: [
    'shorty.advanced.cultural_exchange',
    'shorty.advanced.drop_the_act',
    'shorty.advanced.fell_not_out',
    'shorty.advanced.help',
    'shorty.advanced.prick',
    'shorty.advanced.pull_yourself',
    'shorty.advanced.second_breakfast',
    'shorty.advanced.tougher',
    'shorty.advanced.underrated',
  ],
  capstoneMoveIdList: [
    'shorty.capstone.contagious_fervor',
    'shorty.capstone.cute_face',
    'shorty.capstone.folk_hero',
    'shorty.capstone.i_can_do_this_all_day',
    'shorty.capstone.little_hero',
    'shorty.capstone.slither_snake',
    'shorty.capstone.small_but_daring',
  ],
}
