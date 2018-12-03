"use strict"
class Animal {
    constructor() {
        this.num_legs = 4,
        this.num_eyes = 2
        this.superpower = new SuperPower()
    }
}

class Fox extends Animal {
    constructor() {
        super()
    }
}

class Dog extends Animal {
    constructor() {
        super()
    }
}

class Chicken extends Animal {
    constructor() {
        super()
        this.num_legs = 2
        this.num_wings = 2
    }
}

class SuperPower {
    be_invisible() {
        return 'im invisible'
    }
    flying_kick() {
        return 'ciiiat.....'
    }
}

let fox = new Fox()
let dog = new Dog()
let chicken = new Chicken()

console.log(fox.superpower.be_invisible());
console.log(dog);
console.log(chicken.superpower.flying_kick());
