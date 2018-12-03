"use strict"
class Animal {
  constructor() {
    this._legs = 4
    this._warmBlooded = true
    this.superpower = new SuperPower()
  }
}

class Unicorn extends Animal {
  constructor(){
    super()
  }
}

class Chicken extends Animal {
  constructor() {
    super()
    this._legs = 2
  }
}

class Frog extends Animal {
  constructor() {
    super() 
    this._warmBlooded = false
  }
}

class SuperPower {
  invisible() {
    console.log(`WAAAAA saya menghilang`)
  }

  useLaser() {
    console.log(`Zinnnnnngggg Laser - laser`)
  }

  singing() {
    console.log(`lalalalalalalalalilililililili`)
  }

}

const frog = new Frog() 
const unicorn = new Unicorn()
const chicken = new Chicken()

console.log(frog)
frog.superpower.invisible()
console.log(unicorn)
unicorn.superpower.singing()
console.log(chicken)
chicken.superpower.useLaser()