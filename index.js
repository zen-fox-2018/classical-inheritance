"use strict"
class Animal {
    constructor() {
        this.num_legs = 4
        this.is_warm_blooded = true
        this.superpower = new SuperPower()
    }


}

class Frog extends Animal {
    constructor() {
        super()
        this.num_legs = 2
        this.is_warm_blooded = false
    }
}

class Chimpanzee extends Animal {
    constructor() {
        super()
        this.num_legs = 2
        this.is_warm_blooded = false
    }
}

class Fox extends Animal {
    constructor() {
        super()
        this.is_warm_blooded = true
    }
}

class Chicken extends Animal {
    constructor() {
        super()
        this.is_warm_blooded = true
    }
}

class SuperPower {
    constructor() {
        
    }

    use_laser_vision() {
        return `tembak laser`
        
    }

    be_invisible() {
        return `menghilang`
        
    }
}

let ayam = new Chicken()
let katak = new Frog()
let simpanse = new Chimpanzee()
let rubah = new Fox()
console.log(ayam.superpower.use_laser_vision());
console.log(katak);
console.log(simpanse);
console.log(rubah);



