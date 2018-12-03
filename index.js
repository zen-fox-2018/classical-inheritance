"use strict"
class Animal {
    constructor() {
        this.type = "Mammal";
        this.legs = 2;
        this.eat = "Vegies";
        this.superPower = new SuperPower();
    }
}
class SuperPower {
    constructor() {
      
    }
    canSpeak() {
        return "I Can Speak"
    }

    turnToHuman() {
        return "I Can Turn to Human"
    }

    beInvisible() {
        return "I Can be Invisible"
    }
}

class Panda extends Animal {
    constructor() {
        super()
    }
}

class Bear extends Animal {
    constructor() {
        super()
        this._eat = "Meat"
    }
}

class Koala extends Animal {
    constructor() {
        super()
    }
}

let animals = new Animal();
// console.log(animals)
let panda = new Panda() 
let bear = new Bear()
// console.log(bear)
// let superpower = new SuperPower();
console.log(panda)
console.log(panda.superPower.canSpeak())

