"use strict"

class animal {
    constructor(){
        this.numLeg = 2
        this.blood = 'warm'
        this.genus = 'mammal'
        this.superPower= new superPower()
    }
}

class frog extends animal{
    constructor(){
        super()
        this.numLeg = 4
        this.blood = 'cold'
        this.genus = 'reptile'
    }
}

class bat extends animal{}

class monkey extends animal{
    constructor(){
        super()
        this.blood = 'cold'
    }
}

class superPower {

    constructor(){
    }

    use_laser_vision(){
        return 'laser attack'
    }

    use_blood_venom(){
        return'blood venom'
    }
}

let kodok = new frog()
let kelelawar = new bat()
let monyet = new monkey()

console.log(kelelawar)
console.log(kodok.superPower.use_laser_vision());
console.log(kelelawar.superPower.use_blood_venom())



