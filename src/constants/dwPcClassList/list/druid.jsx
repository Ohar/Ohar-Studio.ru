const React = require('react')

module.exports = {
  id: 'druid',
  name: 'Друид',
  description: [
    `Сидя у костра, оглядись вокруг. Что привело тебя в компанию этих людей, провонявших городской пылью и потом? Может, доброта? Может, ты защищаешь их, как медведица бережёт своих чад? Ведь они вроде как твоя стая. Странные же братья и сестры тебе достались. Что бы ни вдохновило тебя на этот путь, им точно не выжить без твоих острых чувств и ещё более острых когтей.`,
    `Ты&nbsp;— дитя священных рощ, ты родился из земли и носишь на теле отметины её духов. Возможно, раньше у тебя была иная жизнь, и ты, как и они, обитал в городе. С этим покончено. Ты оставил то тело, тот застывший облик, в прошлом. Слушай, как твои товарищи молятся их высеченным из камня богам и полируют серебряные доспехи. Они твердят о славе, которую обретут, вернувшись в город&nbsp;— этот гнойник на лице земли. Их божества&nbsp;— дети, их сталь даёт иллюзию защиты.`,
    `Ты идёшь путём древних. Ты носишь шкуру, дарованную самой природой. ты возьмёшь свою долю из награбленного, но станешь ли ты таким же, как твои спутники? Время покажет…`,
  ],
  nameList: [ 'Азиз', 'Анданна', 'Вей', 'Герран', 'Гикоракс', 'Данстан', 'Деманор', 'Менолиир', 'Митралан', 'Мэб', 'Нильс', 'Обелис', 'Пак', 'Пелин', 'Робард', 'Роуз', 'Сибель', 'Синатель', 'Сиобан', 'Сира', 'Сиула', 'Таннер', 'Таэрос', 'Файстль', 'Эгор', 'Элана', 'Энн'],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['мудрые глаза', 'дикий взгляд', 'пронзительный взор'],
    },
    {
      name: 'Причёска',
      variantList: ['меховой капюшон', 'спутанные волосы', 'косички'],
    },
    {
      name: 'Одежда',
      variantList: ['ритуальное одеяние', 'удобная одежда из кожи', 'старая шкура'],
    },
  ],
  hpBonus: 16,
  damageDice: 6,
  striveList: [
    {
      name: 'Восстановление',
      text: 'Обезобразь, уничтожь или зарой символ изобретений, прогресса или цивилизации.',
    },
    {
      name: 'Культивация',
      text: 'Помогите персонажу Ведущего научиться, вырасти или поработать над собой.',
    },
    {
      name: 'Наследие',
      text: 'Заставь кого-то нервничать своим странным поведением.',
    },
    {
      name: 'Сохранение',
      text: 'Защити или восстанови что-то природное.',
    },
    {
      name: 'Отчуждённость',
      text: 'Действуй или бездействуй так, чтобы это навредило союзнику или кому-то неподалёку.',
    },
  ],
  optionalQuestionList: [
    'Как ты обрёл свои способности?',
    'Какова твоя Отметина, и почему она для тебя важна?',
    'Как выглядит большинство духов? Чего они хотят и как их ублажить?',
    'Какие признаки угрозы нашептали тебе духи?',
  ],
  backgroundIdList: [
    'druid.background.ancient',
    'druid.background.shapeshifter',
    'druid.background.totemist',
  ],
  startMoveIdList: [
    'druid.start.earth_child',
    'druid.start.old_faith_rite',
    'druid.start.spirit_language',
    'druid.start.transformation',
  ],
  advancedMoveToPickOnStart: {
    limit: 1,
    list: [
      'druid.advanced.balance',
      'druid.advanced.shepherd_step',
      'druid.advanced.summon_spirit',
    ],
  },
  advancedMoveIdList: [
    'druid.advanced.barkskin',
    'druid.advanced.borrowed_power',
    'druid.advanced.elemental_lord',
    'druid.advanced.natures_touch',
    'druid.advanced.paw_n_fang',
    'druid.advanced.restore_balance',
    'druid.advanced.rock_n_vine',
    'druid.advanced.shedding',
    'druid.advanced.transformation_master',
  ],
  capstoneMoveIdList: [
    'druid.capstone.blood_n_thunder',
    'druid.capstone.changeling_dance',
    'druid.capstone.chimera',
    'druid.capstone.elemental_form',
    'druid.capstone.primal_wild',
    'druid.capstone.soulmate',
  ],
}
