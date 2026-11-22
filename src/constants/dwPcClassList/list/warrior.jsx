module.exports = {
  id: 'warrior',
  name: 'Воин',
  description: [
    `Неблагодарная это работа — день за днём кидаться в самое пекло, полагаясь лишь на броню да умение владеть оружием. Твои спутники не вострубят в золотые рога, когда в какой-нибудь таверне Баксберга ты словишь под рёбра нож, метящий в них. И хор ангелов не воспоёт тебе славу, когда ты будешь оттаскивать их, визжащих, от края Провалов Безумия.`,
    `Плюнь на них. Ты занимаешься этим, чтобы не размякнуть сердцем. Ради славы. Ради воплей боя. И ради горячей крови, что прольётся в нём. Ты — железный зверь. У твоих друзей клинки из стали, но ты, Воин, сам сделан из неё. Пусть товарищи жалуются на раны, рассевшись в лагере вокруг костра, — ты носишь свои шрамы с гордостью.`,
    `Ты — как стена, и пусть любая опасность разобьётся в прах, наткнувшись на нее, и в конце именно ты будешь последним, кто стоит на ногах.`,
  ],
  nameList: [
    `Анника`, `Аякс`, `Бальдуин`, `Бартлби`, `Бекка`, `Брианна`, `Брунгильда`, `Грегор`, `Грета`, `Дим`, `Зоток`, `Кадеус`, `Кастор`, `Китракет`, `Обри`, `Озрук`, `Олив`, `Рандольф`, `Рудигер`, `Сурт`, `Тэлиан`, `Уолтон`, `Финнеган`, `Хазрит`, `Хоб`, `Хоук`, `Шанна`, `Шарасет`, `Шеварал`, `Элоир`, `Эльдар`, `Янос`, `Ярл`,
  ],
  featureList: [
    {
      name: 'Глаза',
      variantList: ['суровые глаза', 'безжизненные глаза', 'страстные глаза'],
    },
    {
      name: 'Причёска',
      variantList: ['растрёпанные волосы', 'короткие волосы', 'поношенный шлем'],
    },
    {
      name: 'Кожа',
      variantList: ['загрубевшая кожа', 'смуглая кожа', 'шрамы'],
    },
    {
      name: 'Тело',
      variantList: ['мускулистое', 'гибкое', 'искалеченное'],
    },
  ],
  hpBonus: 20,
  damageDice: 10,
  striveList: [
    {
      name: 'Беспорядки',
      text: 'Разожги конфликт там, где его нет.',
    },
    {
      name: 'Гордость',
      text: 'Поставь кого-то на место (или загони в могилу) за проявление неуважения.',
    },
    {
      name: 'Долг',
      text: 'Подвергни себя опасности, чтобы защитить того, кто слабее тебя.',
    },
    {
      name: 'Миротворец',
      text: 'Попробуй разрешить конфликт не проливая крови.',
    },
    {
      name: 'Слава',
      text: 'Красуйся, чтобы впечатлить других.',
    },
    {
      name: 'Чемпион',
      text: 'Выбирай в первую очередь честь, а лишь потом выгоду.',
    },
  ],
  optionalQuestionList: [
    'Где ты научился сражаться? Кто тебя научил?',
    'За что, по твоему мнению, стоит сражаться?',
    'Какая поблизости была последняя война или битва? Ты в ней участвовал?',
    'Какой был твой самый памятный бой? Как он повлиял на тебя, физически или морально?',
  ],
  backgroundIdList: [
    'warrior.backstory.bloody_past',
    'warrior.backstory.champion',
    'warrior.backstory.hire_blade',
    'warrior.backstory.veteran_soldier',
  ],
  startMoveIdList: [
    'warrior.start.focus',
    'warrior.start.tough',
  ],
  advancedMoveToPickOnStart: {
    limit: 3,
    list: [
      'warrior.advanced.style_crush',
      'warrior.advanced.style_precise',
      'warrior.advanced.style_cruel',
      'warrior.advanced.armor_user',
      'warrior.advanced.iron_toughness',
      'warrior.advanced.combat_training',
    ],
  },
  advancedMoveIdList: [
    'warrior.advanced.defender',
    'warrior.advanced.gotta_realistic',
    'warrior.advanced.hold_line',
    'warrior.advanced.parry',
    'warrior.advanced.tactics',
    'warrior.advanced.threatening',
    'warrior.advanced.unbreakable',
    'warrior.advanced.unstoppable',
    'warrior.advanced.versatility',
    'warrior.advanced.war_cry',
  ],
  capstoneMoveIdList: [
    'warrior.capstone.counter_strike',
    'warrior.capstone.equanimity',
    'warrior.capstone.great_defender',
    'warrior.capstone.mighty_muscles',
    'warrior.capstone.tireless',
    'warrior.capstone.war_master',
  ],
  quoteEnd: {
    text: `…Полководцы лгут, когда перед битвой призывают воинов защищать от врага родные могилы и святыни, ибо ни у кого из множества римлян не осталось отчего алтаря. Никто не покажет, где могильный холм его предков! Воюют и умирают они за чужую роскошь и богатство, эти «владыки вселенной», как их называют, которые ни единого комка земли не могут назвать своим!`,
    author: 'Тиберий Гракх',
  },
}
