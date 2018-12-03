"use strict"
class Animal {
    constructor() {
        this.num_legs = 2
        this.is_warm_blooded = true
        this.superpower = new SuperPower()
    }
}


class Frog extends Animal {
    constructor(){
        super()
        this.num_legs = 4
    }
}

class Bat extends Animal {
    constructor() {
        super()
        this.is_warm_blooded = false
    }
    
}

class Chimpanzee extends Animal {
    constructor(){
        super()
        this.num_legs = 4
        this.superpower.mata = 3
        this.is_warm_blooded = false
    }
}

class Fox extends Animal {
    constructor(){
        super()
        this.num_legs = 4
        this.is_warm_blooded = false
    }
}

class Chicken extends Animal{
    constructor() {
        super()
        this.is_warm_blooded = false
    }
    
}
class SuperPower {
    constructor(){
        this.mata = 2
        this.message = ''
    }
    use_laser_vision(){
        this.message = `Dengan menggunakan ke - ${this.mata} matanya , lawan mati` 
        return this.message
    }
    be_invisible(){
        this.message = `Menghilang ` 
        return this.message
    }
}

const Nana = new Frog()
const Yaya = new Fox()
const Kaka = new Chicken()
const Bato = new Bat()
const Lolo = new Chimpanzee()



console.log(Kaka,'ini Kaka si ayam')
console.log(Nana,'ini Nana si Katak')

console.log(`Yaya si Fox  , ${Yaya.superpower.use_laser_vision()}`)
console.log( `Nana si Frog   , ${Nana.superpower.use_laser_vision()}`)
console.log(`Lolo si Chimpanze , ${Lolo.superpower.use_laser_vision()}`)
console.log(`Bato si Kelelawar , ${Bato.superpower.be_invisible()}`)