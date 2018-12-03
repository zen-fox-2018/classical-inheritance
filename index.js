"use strict"
class Animal {
    constructor (classification, foodType, habitat) {
        this._classification = classification
        this._foodType = foodType
        this._habitat = habitat
        this.superpower = new SuperPower();
    }

    get classification () {
        return this._classification
    }

    get foodType () {
        return this._foodType
    }

    get habitat () {
        return this._habitat
    }
}

class SuperPower {
    shoot_laser () {
        console.log('PEW PEW PEWWWW!!!')
    }

    be_invisible () {
        console.log('YOU DONT SEE MEE~~~')
    }

    super_punch () {
        console.log('KPOWWWW!!!!')
    }
}


class Dog extends Animal {
    constructor (classification, foodType, habitat) {
        super(classification, foodType, habitat)
        this.tail = '1 Tail'
    }
}



class Shark extends Animal {
    constructor (classification, foodType, habitat) {
        super(classification, foodType, habitat)
        this._fins = '2 Fins'
    }
}


class Bear extends Animal {
    constructor (classification, foodType, habitat) {
        super(classification, foodType, habitat)
        this._strength = 'Very Strong'
    }
}

let dog = new Dog ('pet', 'meat', 'neighborhood')
let shark = new Shark ('exotic', 'meat', 'sea')
let bear = new Bear ('wild', 'meat', 'mountain')



dog.superpower.shoot_laser()
console.log(dog);


shark.superpower.be_invisible()
console.log(shark);


bear.superpower.super_punch()
console.log(bear);