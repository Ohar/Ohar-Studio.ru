const React = require('react')

module.exports = {
  id: 'inventor',
  name: 'Изобретатель',
  nameList: ['Бринн', 'Весельчак', 'Воробей', 'Джек', 'Жук', 'Крыса', 'Марло', 'Мышь', 'Омар', 'Прыщ', 'Робин', 'Скромник', 'Сорока', 'Трикси', 'Фарли', 'Феликс', 'Хитрюга', 'Шило'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['хитрый', 'безумный', 'пытливый'],
    },
    {
      name: 'Волосы',
      variantList: ['растрёпанные', 'кудрявые', 'коротко стриженные'],
    },
    {
      name: 'Голос',
      variantList: ['трескучий', 'тихий', 'взбудораженный'],
    },
    {
      name: 'Тело',
      variantList: ['бледная кожа', 'следы от ожогов', 'покрыт бинтами'],
    },
  ],
  hpBonus: 16,
  damageDice: 6,
  striveList: [
    {
      name: 'Гордость',
      text: 'Докажи ценность и полезность твоих изобретений.',
    },
    {
      name: 'Прогресс',
      text: 'Помогай простым людям, используя технологии.',
    },
    {
      name: 'Открытие',
      text: 'Успешно примени какую-то вещь так, как не было задумано изначально.',
    },
  ],
  backgroundIdList: [
    'inventor.background.armor_smith',
    'inventor.background.creepy_genius',
    'inventor.background.enthusiast',
    'inventor.background.field_tester',
  ],
  startMoveIdList: [
    'inventor.start.field_test',
    'inventor.start.gadget_belt',
    'inventor.start.gadget_charge',
    'inventor.start.let_me_check',
    'inventor.start.quick_craft',
  ],
  advancedMoveIdList: [
    'inventor.advanced.assembly',
    'inventor.advanced.construct_companion',
    'inventor.advanced.danger_company',
    'inventor.advanced.hard_work',
    'inventor.advanced.overload',
    'inventor.advanced.preparation',
    'inventor.advanced.recycle',
    'inventor.advanced.scientific_nonsense',
  ],
  capstoneMoveIdList: [
    'inventor.capstone.eureka',
    'inventor.capstone.professor_gadget',
    'inventor.capstone.my_little_friends',
    'inventor.capstone.old_friend',
  ],
  noteId: 'inventor_note',
}
