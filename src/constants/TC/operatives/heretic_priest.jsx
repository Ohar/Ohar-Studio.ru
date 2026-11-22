import { MOVE_TYPE_INFANTRY } from '@/constants/TC/move'
import { OPERATIVE_HERETIC_PRIEST } from '@/constants/TC/operative_ids'

export default {
  abilityList: [
    {
      name: 'Puppet Master',
      text: `Select a target model, friend or foe (including the Priest), within 12”. As a RISKY ACTION you can move the model D6” in any one direction, including forcing it to jump/fall down or enter into melee combat with any enemy model (as if it had Charged), or leave Combat (as if it had Retreated, including granting any enemies within range free attacks)`
    },
    {
      name: 'Tough',
      text: `Demonic vitality makes the Heretic Priests very difficult to slay. They are subject to the rules for TOUGH creatures.`
    },
  ],
  armour: 0,
  attackRanged: 2,
  attackMelee: 2,
  baseSize: 32,
  cost: 80,
  equipmentText: `The Heretic Priest can be equipped with any weapon, armour or equipment from the Heretic Legion Armoury.`,
  flavour: `The Leader of a Heretic warband. These fallen priests perform all kinds of unholy magics, summoning petrifying demons and creatures using their Goetic spells. Often pledged to a Demon Lord in Hell, such as Pazuzu or Guison, the Profane Gospels they recite terrify church forces, causing ears to bleed and eyeballs to burst in their sockets.`,
  id: OPERATIVE_HERETIC_PRIEST,
  keyList: ['HERETIC', 'ELITE', 'TOUGH', 'LEADER'],
  limit: 1,
  movementType: MOVE_TYPE_INFANTRY,
  name: 'Heretic Priest',
  speed: 6,
}
