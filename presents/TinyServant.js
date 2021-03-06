import Mob from './Mob.js'
import Weapon from './Weapon.js'
import DamageRoll from './DamageRoll.js'

export default class TinyServant extends Mob {
  constructor() {
    super();
    this.Name = "TinyServant";
    this.Icon = "\"robot\""
    
    this.Str = -3;
    this.Dex = 3;
    this.Con = 0;
    this.Int = -4;
    this.Wis = -4;
    this.Chr = -5;
    
    this.DamageRoll = new DamageRoll();
    
    this.Weapons = [
      new Weapon("Slam", [["ToHit", 5],  ["IsMelee", true], ["Weapon","1d4 + 3 bludgeoning"]]),
    ];
    
    this.EquipWeapon = this.Weapons[0];
    
  }
  
}
