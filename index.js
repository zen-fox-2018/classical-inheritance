"use strict"

class Animals {
    constructor() {
        this.legs = 4;
        this.eyes = 2;
    }
    
}

class Frog extends Animals {
    constructor() {
        super();
        this.eyes = 3;
    }
    
    
}

class Fox extends Animals {
    constructor() {
        super();
        this.tails = 9
        this.ability = new superPower()
    }
}

class superPower {
    constructor() { }
    
    abilities() {
        return 'be Invisible'
    }
}

// TEST PARENT
const parents = new Animals()
console.log(parents)

// TEST CHILD
const katak = new Frog()
const zen = new Fox()
console.log(katak)
console.log(zen.ability.abilities())
