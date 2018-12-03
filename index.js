"use strict"
class animal {
    constructor() {
        this.num_legs = 2
        this.is_warm_blood = true
        this.superpower = new superPower()
    }
}

class superPower {
    constructor() {

    }
    use_laser_vision() {
        console.log(`zeng zeng rasakan laser ku`)
    }
    invisible() {
        console.log(`kau tidak akan melihatku`)
    }
}

class bebek extends animal {
    constructor() {
        super()
        this.is_warm_blood = false
    }
}
class monyet extends animal {
    constructor() {
        super()
        this.num_legs = 4
        this.is_warm_blood = false
    }
}

let duck = new bebek()
let monkey = new monyet()
console.log(duck)
console.log(monkey)
monkey.superpower.invisible()
duck.superpower.use_laser_vision()
