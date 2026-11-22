const React = require('react')

module.exports = {
  id: 'extra',
  name: 'Статист',
  description: [
    ``,
  ],
  nameList: [''],
  featureList: [
    {
      name: 'Взгляд',
      variantList: ['', ''],
    },
    {
      name: 'Причёска',
      variantList: ['', ''],
    },
    {
      name: 'Одежда',
      variantList: ['', ''],
    },
    {
      name: 'Тело',
      variantList: ['', '', ''],
    },
  ],
  hpBonus: 0,
  damageDice: 0,
  striveList: [
    {
      name: '',
      text: '',
    },
  ],
  backgroundIdList: [
    '',
  ],
  startMoveIdList: [
    '',
  ],
  advancedMoveIdList: [
    '',
  ],
  capstoneMoveIdList: [
    '',
  ],
  specialMoves: {
    title: '',
    list: [
      '',
    ]
  },
}

const foo = `

    <div style="text-align:center"><img src="systems/dungeonworld/assets/icons/environment/people/spearfighter.webp"></div><p><em>Статист — это вспомогательный персонаж, который может быть использован когда у вас есть приглашённый игрок или если обычный персонаж игрока занят чем-то другим. Статисты хороши чтобы распробовать игру, когда вам нужны какие-то расходные миньоны, вы играете в ваншот, или что-то подобное.</em></p><p><em>Не расстраивайтесь и не принимайте близко к сердцу, если статист умрёт; в конце концов, он — расходный материал.</em></p><p>&nbsp;</p><h2 data-anchor="imena">Имена</h2><p>Боб, Тарк, Давдо, Гурв, Браддит, Николай, Казимир, Альберт, Ева, Ирена, Мари, Радана, Камила, Ирма</p><h2 data-anchor="vneshnostь">Внешность</h2><p>Выберите одну черту по каждому пункту:</p><ul><li>Обычные волосы, Широкополая шляпа или Шлем</li><li>Обычная униформа, Рабочая одежда или Одежда путешественника</li><li>Закрытое лицо, Серьезное лицо или Угрюмое лицо</li></ul><h2 data-anchor="harakteristiki">Характеристики</h2><p>Ваши максимальные хиты: <strong>16+ТЕЛ</strong></p><p>Ваш базовый урон равен <a class="inline-roll roll" data-mode="roll" data-flavor="" data-formula="d6"><i class="fas fa-dice-d20"></i>d6</a>.</p><p>Распределите эти модификаторы по характеристикам <strong>+2, +1, +1, +0, +0, -1</strong></p><p>&nbsp;</p><h2 data-anchor="rabota">Работа</h2><p>Выберите свою работу:</p><blockquote><h3 data-anchor="voyaka"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.cU6cr2XvJLznooT4" data-id="cU6cr2XvJLznooT4" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Вояка</a></strong></h3><p>Ваш кубик урона теперь к8</p></blockquote><p>&nbsp;</p><blockquote><h3 data-anchor="ekspert"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.qxfcLMYz5K3MURDR" data-id="qxfcLMYz5K3MURDR" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Эксперт</a></strong></h3><p>Работая в сфере своей экспертизы, бросайте с преимуществом</p></blockquote><p>&nbsp;</p><blockquote><h3 data-anchor="nachinayushij-mag"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.ocauGsMB7pmipzeL" data-id="ocauGsMB7pmipzeL" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Начинающий маг</a></strong></h3><p>Вы можете творить небольшие магические эффекты с помощью хода <a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.0c3fgTjh57AwruiJ" data-id="0c3fgTjh57AwruiJ" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Сотворить заговор</a>.</p></blockquote><p>&nbsp;</p><h2 data-anchor="vy-nachinaete-igru-so-sleduyushimi-hodami:">Вы начинаете игру со следующими ходами:</h2><h3 data-anchor="ekspertiza"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.frBSrfIu60UkDOqX" data-id="frBSrfIu60UkDOqX" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Экспертиза</a></strong></h3><p>Вы эксперт в определённом поле.&nbsp;<strong>Выберите в чём вы эксперт</strong>:</p><ul><li>Травничество и медицина (МУД)</li><li>Поиск пути и выживание в глуши (МУД)</li><li>Внедрение и воровство (ЛОВ)</li><li>Вас уважают в каком-то социальном кругу (скажите в каком) (ХАР)</li><li>Знание академической специальности (скажите какой) (ИНТ)</li><li>Защита и охрана (ТЕЛ)</li><li>Грубая сила и тяжёлые руки (СИЛ)</li><li>Мастерство в каком-то ремесле (скажите в каком и Ведущий выберет подходящую характеристику).</li></ul><p><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.feNkp70TAI9vpPkq" data-id="feNkp70TAI9vpPkq" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Копаясь в памяти</a> в вашей области экспертизы</strong>, вы бросаете с преимуществом.</p><p>&nbsp;</p><h3 data-anchor="tuz-v-rukave"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.038pQhC3vH00tSEe" data-id="038pQhC3vH00tSEe" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Туз в рукаве</a></strong></h3><p>Когда дела идут плохо, у вас есть туз в рукаве чтобы помочь вам выбраться из проблем. <strong>Выберите одно сейчас, но не описывайте что это конкретно пока это не потребуется использовать и раскройте ваш туз когда он вам понадобится:</strong></p><ul><li>Благосклонность кого-то могущественного (опишите кого)</li><li>Сеть контактов (выберите одно — <em>хорошо расположена</em> или <em>лояльная</em>)</li><li>Членство в гильдии (выберите одно — <em>престижная</em> или <em>тайная</em>)</li><li>Убежище (выберите одно — <em>секретное </em>или <em>укреплённое</em>)</li></ul><p>&nbsp;</p><h3 data-anchor="krasnorubashechnik"><strong><a class="content-link" draggable="true" data-uuid="Compendium.world.the-extra-moves.Item.Mbeyzvk0NxB90maQ" data-id="Mbeyzvk0NxB90maQ" data-type="Item" data-pack="world.the-extra-moves" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Краснорубашечник</a></strong></h3><p>У вас нет ни <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.7ZwyIwT0KFjKEvi5" data-id="7ZwyIwT0KFjKEvi5" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Аспектов</a>, ни Стремлений— вы здесь потому что вам платят. Вы получаете опыт, но не получаете уровень.</p><p><strong>Когда вы жертвуете собой пытаясь чего-то достичь</strong>, выберите одно когда вы умираете:</p><ul><li>Другие персонажи что-то узнают из вашей смерти — расскажите нам что они узнали</li><li>Вы даёте им возможность; расскажите как вы временно задерживаете или мешаете угрозе, как раз достаточно чтобы кто-то воспользовался этим преимуществом.</li><li>Вы здесь просто потому что это ваша работа; расскажите что вы успели сделать перед смертью, например открыли запертую дверь, забрали с собой в могилу не очень важного врага, или делая то, зачем вас наняли.</li></ul><p>В конце сессии, заработанный вами опыт, включая ответы на вопросы хода <a class="content-link" draggable="true" data-uuid="Compendium.world.basic-moves-v2.Item.aGbaj6PeLdm3H4zc" data-id="aGbaj6PeLdm3H4zc" data-type="Item" data-pack="world.basic-moves-v2" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>Конец сессии</a>, можно перенести на другого подконтрольного вам персонажа или того, которого вы сделаете в будущем.</p><p>&nbsp;</p><h2 data-anchor="snaryazhenie">Снаряжение</h2><p><span style="font-family:Arial, sans-serif">Ваша <a class="content-link" draggable="true" data-uuid="Compendium.world.prochie-hody.Item.gi2k50hOxPuXcqau" data-id="gi2k50hOxPuXcqau" data-type="Item" data-pack="world.prochie-hody" data-tooltip="Move (Предмет)"><i class="fas fa-suitcase"></i>нагрузка</a> равна <strong>9. </strong>Каждый предмет, включая <a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.a7VgXUQQ3pERhyPy" data-id="a7VgXUQQ3pERhyPy" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Неопределённые</a>, исключая маленькие, добавляет свой вес к общей нагрузке.</span></p><ul><li><p><span style="font-family:Arial, sans-serif"><strong>1-3 </strong>веса это лёгкая нагрузка (вы <em>быстры</em> и <em>тихи</em>)</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>4-6 </strong>нормальная нагрузка</span></p></li><li><p><span style="font-family:Arial, sans-serif"><strong>7-9 </strong>тяжёлая (вы <em>медленны</em>, <em>шумны, вам жарко</em> и <em>быстро устаёте</em>)</span></p></li></ul><p><strong>Вы начинаете игру с:</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасами</a> (3 исп, 1 вес)</li></ul><p><strong>Выберите своё вооружение (одно):</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.owzrAykoyBT0X415" data-id="owzrAykoyBT0X415" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Одноручное оружие</a> ближнего боя на свой выбор (<em>взмах меча</em>, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.XkVUJaLXZxIu3neI" data-id="XkVUJaLXZxIu3neI" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Двуручное оружие</a> ближнего боя на свой выбор (<em>взмах меча, +1 урон, двуручное вес 2</em>)</li></ul><p><strong>Выберите два:</strong></p><ul><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-weapons.Item.jSFKrGehEa3y26cO" data-id="jSFKrGehEa3y26cO" data-type="Item" data-pack="world.equipment-weapons" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Лук</a> (<em>близко</em>, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-armor.Item.FkfxRU6NiOzEzkIy" data-id="FkfxRU6NiOzEzkIy" data-type="Item" data-pack="world.equipment-armor" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Щит</a>(+1 брони, вес 2)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-class.Item.owzrAykoyBT0X415" data-id="owzrAykoyBT0X415" data-type="Item" data-pack="world.equipment-class" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Одноручное оружие</a> ближнего боя на свой выбор (<em>взмах меча</em>, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-armor.Item.oGiXIqNQbukIjf06" data-id="oGiXIqNQbukIjf06" data-type="Item" data-pack="world.equipment-armor" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Потрёпанная броня</a> (броня 1, вес 1)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.snaryazhenie--zelya.Item.VYEkUIR0riLt8xU8" data-id="VYEkUIR0riLt8xU8" data-type="Item" data-pack="world.snaryazhenie--zelya" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Зелье исцеления</a> (мал. предмет)</li><li><a class="content-link" draggable="true" data-uuid="Compendium.world.equipment-gear.Item.CDnPMKvFLdWlRFxb" data-id="CDnPMKvFLdWlRFxb" data-type="Item" data-pack="world.equipment-gear" data-tooltip="Equipment (Предмет)"><i class="fas fa-suitcase"></i>Припасы</a> (3 исп, 1 вес)</li></ul>

`
