export default class DamageRoll {
    constructor(){
        this.crit = false;
        this.autoCrit = false;
        this.hitRoll = 0;
        this.hitRoll2 = 0;
        this.vantage = 0;
        this.attacker = null;
        this.damageResults = []; // Expects: [[damage, type]]
        this.missed = false;
    }
}
