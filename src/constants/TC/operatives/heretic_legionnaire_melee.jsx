import { OPERATIVE_HERETIC_LEGIONNAIRE_MELEE } from '@/constants/TC/operative_ids'

import heretic_trooper from './heretic_trooper'

export default {
  ...heretic_trooper,
  attackMelee: 1,
  cost: 40,
  equipmentText: `Heretic Legionnaires can be equipped with any weapon, armour or equipment from the Heretic Legion armoury.`,
  id: OPERATIVE_HERETIC_LEGIONNAIRE_MELEE,
  name: 'Heretic Legionnaire (Melee)',
}
