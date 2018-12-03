"use strict"

class Animals  {
    constructor(){
        this._numlegs = 4
        this._habitat = 'land'
        this._classified = 'carnivora'
        this._super = new SuperPower()
    }

   
}
class birds extends Animals {
    constructor() {
        super()
        this._numlegs = 2
    }
}
class fish extends Animals {
    constructor() {
        super() 
        this._super.kekuatan = this._super.fast_Climber()
        this._numlegs = 'fish has no legs'
        this._habitat = 'water'
       // this._superPower = new superPower()
       
    }
}
class lion extends Animals {
    constructor() {
        super()
        this._classified = 'herbivora'
    }
}

class SuperPower {

    constructor(name) {
        this.kekuatan =  this.use_laser_vision()
       // this.name = name 
    }
    use_laser_vision(){
        return ' ini dapat menembakkan laser'
    }
    fast_Climber(){
        return `ini bisa memanjat dengan cepat`
    }
}
//let laser = new superPower
let phoenix = new birds()
let lele = new fish()
let simba = new lion()
console.log(phoenix)
console.log(lele)
console.log(simba)