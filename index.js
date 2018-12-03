"use strict"

class FlyingAnimal {
    constructor(reproduksi){
        this.reproduksi = reproduksi
        this.aktif = 'siang hari'
        this.diet = 'omnivora'
        this.power = new SuperPower()
    }

}

class Kelelawar extends FlyingAnimal {
    constructor(){
        super('beranak')
        // this.reproduksi = reproduksi
        // super('bertelur')
        this.aktif = 'malam hari'
        this.diet = 'karnivora'
    }
}

class BurungHantu extends FlyingAnimal {
    constructor() {
        super('bertelur')
        this.diet = 'omnivora'
    }
}

class SuperPower{
    constructor(){
        this.nightVision = 'aktif'
    }

    use_laser_vision(){
        return 'pew pew laser vision'
    }

    use_fireball(){
        return 'fireball!'
    }
}

let merpati = new FlyingAnimal('bertelur')
console.log(merpati)
let kalong = new Kelelawar()
console.log(kalong)
console.log(kalong.power.use_fireball())

console.log(new BurungHantu())