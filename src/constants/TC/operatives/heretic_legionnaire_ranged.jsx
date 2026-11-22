import { OPERATIVE_HERETIC_LEGIONNAIRE_RANGED } from '@/constants/TC/operative_ids'

import heretic_legionnaire_melee from './heretic_legionnaire_melee'

export default {
  ...heretic_legionnaire_melee,
  attackRanged: 1,
  attackMelee: 0,
  id: OPERATIVE_HERETIC_LEGIONNAIRE_RANGED,
  name: 'Heretic Legionnaire (Ranged)',
}
