import { MOVE_TYPE_FLY } from '@/constants/TC/move'
import { OPERATIVE_ARTILLERY_WITCHES } from '@/constants/TC/operative_ids'

export default {
  abilityList: [
    {
      name: 'Infernal Bomb',
      text: `This wicked infernal weapon is treated as a one-handed Ranged weapon with the Keyword BLAST 3”. Specify a 1x1mm point on the battlefield within 36” that the Witch can see and that you want to target. Next, make a Ranged Attack ACTION. If the roll fails (i.e. you roll 6 or less with the two lowest Dice), the bomb lands 1” away from its intended location, multiplied by the number representing the degree of failure (for example, if you rolled 5, the bomb lands 2” away, as 7 - 5 = 2). The direction is decided by your opponent. Roll on the Injury Chart for each model within the BLAST radius.

If the bomb lands exactly on top of any model, roll with 3D6 on the Injury Chart and add the dice together! Other models hit by the bomb roll on the Injury Chart as standard. Any model hit, but not taken Out of Action, by this attack is blown D3” directly away from the point of impact (roll for each model separately), stopping if they hit other models, buildings or objects. This attack has the Keyword SHRAPNEL and therefore causes an additional +1 BLOOD MARKER. Cover, range and higher position do not affect attacks by the Infernal Bomb. Roll injuries for models that would benefit from Cover from the perspective of the BLAST point with -1 DICE. The Activation of the Witch ends immediately after using the Infernal Bomb.`
    },
    {
      name: 'Artificial Life',
      text: `Artillery Witches are not affected by FEAR. Additionally, attacks with the Keyword GAS suffer a -1 DICE penalty to injure the Witch and they do not suffer additional BLOOD MARKERS from the Keyword GAS.`
    },
    {
      name: 'Levitate',
      text: `The Artillery Witch can Climb up without taking an ACTION and does not roll on the Injury Chart when falling.`
    },
  ],
  armour: 0,
  attackRanged: 0,
  attackMelee: -1,
  baseSize: 25,
  cost: 90,
  equipmentText: `An Artillery Witch is always equipped with an endless supply of Infernal Bombs (see below) and can carry no other ranged weapons. Otherwise, she can be equipped with any melee weapon, armour or equipment from the Heretic Legion Armoury`,
  flavour: `Artillery Witches stalk the battlefields, hurling ordnance assembled in the death factories of Hell’s Third Circle. They are completely mute and no one has ever seen their faces. Some question if they are even living, and there are tales that they too were manufactured in Hell. They can pull an infinite number of Infernal Bombs from a portal to Hell that they manifest at will, summoning them to their hands from a gate of midnight blackness`,
  id: OPERATIVE_ARTILLERY_WITCHES,
  keyList: ['HERETIC', 'ARTIFICIAL'],
  limit: { min: 0, max: 1 },
  movementType: MOVE_TYPE_FLY,
  name: 'Artillery Witch',
  speed: 6,
}
