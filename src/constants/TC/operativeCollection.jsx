import {
  OPERATIVE_ARTILLERY_WITCHES,
  OPERATIVE_HERETIC_CHORISTER,
  OPERATIVE_HERETIC_DEATH_COMMANDO,
  OPERATIVE_HERETIC_LEGIONNAIRE_MELEE,
  OPERATIVE_HERETIC_LEGIONNAIRE_RANGED,
  OPERATIVE_HERETIC_PRIEST,
  OPERATIVE_HERETIC_TROOPER,
} from '@/constants/TC/operative_ids'

import artillery_witches from '@/constants/TC/operatives/artillery_witches'
import heretic_chorister from '@/constants/TC/operatives/heretic_chorister'
import heretic_death_commando from '@/constants/TC/operatives/heretic_death_commando'
import heretic_priest from '@/constants/TC/operatives/heretic_priest'
import legionnaire_melee from '@/constants/TC/operatives/heretic_legionnaire_melee'
import legionnaire_ranged from '@/constants/TC/operatives/heretic_legionnaire_ranged'
import heretic_trooper from '@/constants/TC/operatives/heretic_trooper'

const operativeCollection = {
  [OPERATIVE_ARTILLERY_WITCHES]: artillery_witches,
  [OPERATIVE_HERETIC_CHORISTER]: heretic_chorister,
  [OPERATIVE_HERETIC_DEATH_COMMANDO]: heretic_death_commando,
  [OPERATIVE_HERETIC_LEGIONNAIRE_MELEE]: legionnaire_melee,
  [OPERATIVE_HERETIC_LEGIONNAIRE_RANGED]: legionnaire_ranged,
  [OPERATIVE_HERETIC_PRIEST]: heretic_priest,
  [OPERATIVE_HERETIC_TROOPER]: heretic_trooper,
}

export default operativeCollection
