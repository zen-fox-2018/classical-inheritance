"use strict"

class Animals {
    constructor() {
        this.num_eyes = 2
        this.num_legs = 4
        this.is_warm_blooded = true
        this.superpower = new SuperPower()
    }
}

// Frog, Bat, Chimpanzee, Fox, Chicken

class Frog extends Animals{
    constructor() {
        super()
        this.is_warm_blooded = false
    }
}

class Bat extends Animals{
    constructor(leg,wings) {
        super()
        this.num_legs = leg
        this.num_wings = wings
    }
}

class Chimpanzee extends Animals{
    constructor(leg) {
        super()
        this.num_legs = leg
    }
}

class Fox extends Animals{
    constructor() {
        super()
    }
}

class Chicken extends Animals{
    constructor(leg,wings) {
        super()
        this.num_legs = leg
        this.num_wings = wings
    }
}

class SuperPower{
    superJump() {
        return 'can jump over 10 feet'
    }

    nightMode() {
        return 'can see in the dark'
    }

    smartLearn() {
        return 'fast learner among the animals'
    }

    chakraKyuubi() {
        return 'has infinite chackra'
    }

    ayamGureng() {
        return 'can be a very delicious food'
    }

}




let frog = new Frog()
console.log(frog.superpower.superJump());

let bat = new Bat(2,2)
console.log(bat.superpower.nightMode());

let chimpanzee = new Chimpanzee(2)
console.log(chimpanzee.superpower.smartLearn());

let fox = new Fox()
console.log(fox);

let chicken = new Chicken(2,2)
console.log(chicken);




