const React = require('react')

module.exports = {
  id: 'dwarf',
  name: 'Дварф',
  description: [
    `Твой великий народ прошёл через дебри веков, достойно себя показав. Могучие крепости, побеждённые орды, сражённые драконы, слава на поле боя, величайшие мастера — всё это дварфы. Кропотливо работая, без устали копая, добывая, обрабатывая, куя, варя и мастеря, каменный народ всегда брал своё. Горе тем, кто решил потревожить одну из крепостей — стройные ряды крепких, закованных в непробиваемые доспехи воинов не заставят себя ждать у вражеского порога, а шквал мощных ударов отправит их к праотцам.`,
    `Люди уважают тебя, а эльфы втайне тебе завидуют. Куда им до тебя. Ты же Дварф. А Дварф — это звучит гордо.`,
  ],
  nameList: ['Анника', 'Брунгильда', 'Бьёрн', 'Герда', 'Грета', 'Дарга', 'Дим', 'Драммонд', 'Зоток', 'Озрук', 'Рургош', 'Сиггруг', 'Сурт', 'Фрея', 'Хельга', 'Эльфар', 'Янос', 'Ярл',],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['усталые глаза', 'жесткие глаза', 'глаза-бусинки'],
    },
    {
      name: 'Причёска',
      variantList: ['заплетённая в косу борода', 'длинные усы', 'густые бакенбарды'],
    },
    {
      name: 'Кожа',
      variantList: ['мозолистая кожа', 'бронзовая кожа', 'волосатая кожа'],
    },
    {
      name: 'Фигура',
      variantList: ['широкие плечи', 'широкий обхват', 'мускулистое тело'],
    },
  ],
  hpBonus: 20,
  damageDice: 10,
  striveList: [
    {
      name: 'Жадность',
      text: 'Забери себе то, что предназначается кому-то другому.',
    },
    {
      name: 'Ремесленник',
      text: 'Создай, восстанови или защити нечто непреходящей ценности.',
    },
    {
      name: 'Честь',
      text: 'Сдержи обещание, несмотря на сложности или проблемы, или накажи нарушителя клятвы.',
    },
    {
      name: 'Злоба',
      text: 'По-особенному отомсти кому-то, кто навредил тебе или союзнику.',
    },
    {
      name: 'Раскованность',
      text: 'Причини кому-то неудобства ради наслаждения едой и питьём.',
    },
  ],
  optionalQuestionList: [
    'Какую традицию дварфы всегда соблюдают, а люди сочли бы странной?',
    'Какую обычную человеческую традицию ни один дварф никогда не будет соблюдать?',
    'Насколько хорошо известны дварфы среди людей? У вас есть какая-то общая история, дружеская или нет?',
    'Кто научил тебя ремеслу и почему? Какова была твоя благодарность?',
  ],
  backgroundIdList: [
    'dwarf.background.mountain_dweller',
    'dwarf.background.hill_trader',
    'dwarf.background.underground_dweller',
  ],
  startMoveIdList: [
    'dwarf.start.armored',
    'dwarf.start.sniff_for_gold',
    'dwarf.start.tongs_n_hammer',
    'dwarf.start.unbreakable',
  ],
  advancedMoveIdList: [
    'dwarf.advanced.ancestral_knowledge',
    'dwarf.advanced.ancient_allies',
    'dwarf.advanced.ancient_enemies',
    'dwarf.advanced.crusher',
    'dwarf.advanced.greed_is_good',
    'dwarf.advanced.iron_soul',
    'dwarf.advanced.nobody_wants_a_beer',
    'dwarf.advanced.shieldbreaker',
    'dwarf.advanced.shredder',
    'dwarf.advanced.stone_durability',
    'dwarf.advanced.stone_speaker',
    'dwarf.advanced.stonelike',
    'dwarf.advanced.strong_back',
    'dwarf.advanced.tools_of_war',
    'dwarf.advanced.training',
    'dwarf.advanced.tremor_sense',
    'dwarf.advanced.wanna_drink',
  ],
  capstoneMoveIdList: [
    'dwarf.capstone.great_master',
    'dwarf.capstone.eternal_enemies',
    'dwarf.capstone.master_craftsmith',
    'dwarf.capstone.mithril_soul',
  ],
}
