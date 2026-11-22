import { MOVE_TYPE_INFANTRY } from '@/constants/TC/move'
import { OPERATIVE_HERETIC_TROOPER } from '@/constants/TC/operative_ids'

export default {
  armour: 0,
  attackRanged: 0,
  attackMelee: 0,
  baseSize: 25,
  cost: 30,
  equipmentText: `Heretic Troopers can be equipped with any weapon, armour or equipment from the Heretic Legion armoury. You can upgrade up to half (rounding down) of your Heretic Troopers into Heretic Legionnaires at the cost of +10 ducats each. You can select to upgrade either the Ranged or Melee characteristic of any of your Legionnaires by +1 DICE. You can choose a different bonus for each Legionnaire.`,
  flavour: `These soldiers make up the bulk of the Heretic forces. They have witnessed the Gate of Hell and survived, damning them for all eternity.`,
  id: OPERATIVE_HERETIC_TROOPER,
  keyList: ['HERETIC'],
  limit: Infinity,
  movementType: MOVE_TYPE_INFANTRY,
  name: 'Heretic Trooper',
  speed: 6,
}
