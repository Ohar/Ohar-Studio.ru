import { MOVE_TYPE_INFANTRY } from '@/constants/TC/move'
import { OPERATIVE_HERETIC_DEATH_COMMANDO } from '@/constants/TC/operative_ids'

export default {
  abilityList: [
    {
      name: 'Infiltrator',
      text: `The Death Commando can be placed anywhere on the table out of line of sight of any enemies, but at least 8” away from the closest enemy. Deployed after all other models without the Keyword INFILTRATOR.`
    },
    {
      name: 'Stealth Generator',
      text: `Ranged attacks against a Death Commando suffer -1 DICE to all the attack rolls.`
    },
    {
      name: 'Hide',
      text: `As a RISKY ACTION with +1 DICE the Commando can hide if any piece of scenery the model is touching can block line of sight in any direction, even partially, regardless of whether an enemy currently has a clear LOS. If successful, enemies cannot target the Commando with ranged attacks or Charges. Weapons with the Keyword BLAST affect the Commando as normal if it is in the radius of the weapon. This effect ends if the Commando moves from its exact position in any way, it makes a Ranged Attack or an enemy model comes within 1.5” of it.`
    },
  ],
  armour: 0,
  attackRanged: 1,
  attackMelee: 2,
  baseSize: 32,
  cost: 90,
  equipmentText: `The Death Commando can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury. The only ranged weapons they can be equipped with are Silenced Pistols, a Tormentor Chain and Gas Grenades.`,
  flavour: `Silent Killers equipped with stealth generators that hide them from the eyes of God. These terrifying infiltrators have been known to kill entire enemy squads alone`,
  id: OPERATIVE_HERETIC_DEATH_COMMANDO,
  keyList: ['HERETIC', 'ELITE', 'INFILTRATOR'],
  limit: { min: 0, max: 1 },
  movementType: MOVE_TYPE_INFANTRY,
  name: 'Heretic Death Commando',
  speed: 6,
}
