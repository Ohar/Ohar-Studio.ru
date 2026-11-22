import { MOVE_TYPE_INFANTRY } from '@/constants/TC/move'
import {OPERATIVE_HERETIC_CHORISTER} from '@/constants/TC/operative_ids'

export default {
  abilityList: [
    {
      name: 'Unholy Hymns',
      text: `All enemy models within 8” of the Chorister suffer an additional -1 DICE for all ACTIONS they attempt.`
    },
    {
      name: 'Unholy Horror',
      text: `The Chorister causes FEAR.`
    },
  ],
  armour: 0,
  attackRanged: -2,
  attackMelee: 2,
  baseSize: 32,
  cost: 65,
  equipmentText: `The Chorister can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury.`,
  flavour: `Suicide is a Mortal Sin, and sacrificing yourself to the glory of Hell is a yet greater affront to God. Some Heretics born with a gift of sonorous voice but little prospects of rising through the ranks but possessing a determination to excel may pursue the dark path of becoming a Chorister.

Such supplicants go to one of the black altars of Heretic abodes at the bottom of the deep inverted pyramid temples dedicated to the greatest of Arch-devils. There they are dressed in the robes of dark devotion, lie on the altar and mutilate themselves to death by carving unholy runes into their flesh. The more wounds they can suffer before perishing, the more pleasing it is said their offering is. The most devout slice their own throats, trying to cut as deep as they can before their miserable life leaves them.

Most such wretches go to their doom in the Lake of Fire, but some are reborn as Choristers after nine days. Their corpses lurch back to their feet, and finish their grisly beheading, and lift their severed heads that begin to sing hymns they have learned in the Inferno. From their self-inflicted wounds spurts cold blood that forms diabolic symbols and changes to match the words of their unholy chorale. They head towards the front lines driven by a call no living can hear and join the Heretic warband of their choosing.

As their severed heads sing their agonising hymns, the minds of their enemies are filled with visions from the Pits of Hell, weakening both the resolve and strength of those unfortunate enough to hear the dire song of a Chorister. Their hymns are often the first thing a fresh recruit experiences on the battlefield, as their unholy voice rolls across the trenches, proclaiming a never-ending prophecy of the final victory of Hell over Heaven`,
  id: OPERATIVE_HERETIC_CHORISTER,
  keyList: ['HERETIC', 'ELITE', 'FEAR'],
  limit: { min: 0, max: 1 },
  movementType: MOVE_TYPE_INFANTRY,
  name: 'Heretic Chorister',
  speed: 6,
}
