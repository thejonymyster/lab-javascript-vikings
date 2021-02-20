// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(dmg) {
        this.health -= dmg
    }
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name
    }

    receiveDamage(dmg) {
        this.health -= dmg
        if (this.health > 0) {return `${this.name} has received ${dmg} points of damage`} else {return `${this.name} has died in act of combat`}
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(dmg){
        this.health -= dmg
        // if the Saxon is still alive, it should return "A Saxon has received DAMAGE points of damage"
        // if the Saxon dies, it should return "A Saxon has died in combat"
        if (this.health > 0) {return `A Saxon has received ${dmg} points of damage`} else {return "A Saxon has died in combat"}
    }
}

// War
class War {}
