const React = require('react')

module.exports = {
  id: 'ranger',
  name: 'Следопыт',
  description: [
    `Твои спутники — горожане. Они не слышали волчьего воя. На них не дышал ветер промозглых пустынь. Ты преследовал дичь, вооружённый лишь ножом и луком, а они? Нет, чёрт их побери. Вот почему им нужен именно ты.`,
    `Проводник. Охотник. Дикий зверь. Раньше ты отлично обходился без спутников, пока некая сила — судьба? — не свела вас вместе. Они отважны? Возможно. Сильны? Наверняка. Но тайны диких мест здесь знаешь только ты.`,
    `Без тебя, следопыт, они пропадут. Веди же их сквозь кровь и мглу.`,
  ],
  nameList: ['Аранви', 'Брандон', 'Галек', 'Дамбрат', 'Джона', 'Диана', 'Имори', 'Келион', 'Лейнет', 'Нора', 'Трондир', 'Шрайк', 'Эльросин'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['дикий', 'пронзительный', 'звериные глаза'],
    },
    {
      name: 'Причёска',
      variantList: ['капюшон', 'спутанные волосы', 'выбритая голова'],
    },
    {
      name: 'Одежда',
      variantList: ['накидка', 'маскировочная', 'дорожная'],
    },
    {
      name: 'Тело',
      variantList: ['гибкое', 'звериная грация', 'точные движения'],
    },
  ],
  hpBonus: 18,
  damageDice: 8,
  striveList: [
    {
      name: 'Одичалый',
      text: 'Избегай удобств цивилизованного мира.',
    },
    {
      name: 'Натуралист',
      text: 'Помогай животным или духам диких земель.',
    },
    {
      name: 'Страж',
      text: 'Подвергни себя опасности, чтобы сразиться с неестественной угрозой.',
    },
  ],
  optionalQuestionList: [
    'Что заставляет тебя возвращаться в цивилизацию? Как другие люди относятся к тебе?',
    'Как большинство людей воспринимают дикую природу и почему?',
    'Из всех монстров что ты видел, какой был самым значительным?',
    'Что у тебя чаще всего спрашивают?',
  ],
  backgroundIdList: [
    'ranger.background.hunter',
    'ranger.background.traveler',
    'ranger.background.watch',
  ],
  startMoveIdList: [
    'ranger.start.scout_ahead',
    'ranger.start.skirmisher',
  ],
  advancedMoveToPickOnStart: {
    limit: 2,
    list: [
      'ranger.advanced.companion',
      'ranger.advanced.disguise',
      'ranger.advanced.handicrafter',
      'ranger.advanced.pioneer',
      'ranger.advanced.true_shot',
    ],
  },
  advancedMoveIdList: [
    'ranger.advanced.big_hunt',
    'ranger.advanced.eclipse',
    'ranger.advanced.incredible_exemplar',
    'ranger.advanced.mental_map',
    'ranger.advanced.predator',
    'ranger.advanced.tracking',
    'ranger.advanced.trapper',
    'ranger.advanced.wild_empathy',
  ],
  capstoneMoveIdList: [
    'ranger.capstone.alpha',
    'ranger.capstone.fast_response',
    'ranger.capstone.legendary_beast',
    'ranger.capstone.master_ranger',
    'ranger.capstone.way_paver',
  ],
  specialMoves: {
    title: 'Компаньон',
    text: `<p>Если ты выбрал себе <em>Компаньона</em>, то получаешь и следующие ходы.</p>`,
    list: [
      'ranger.special.create_companion',
      'ranger.special.faithful_to_the_end',
    ]
  },
}
