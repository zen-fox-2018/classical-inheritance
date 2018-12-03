"use strict"

class Animal {
  constructor() {
    this._num_legs = 2
    this._is_warm_blooded = false
  };
}

class Chicken extends Animal {
  constructor() {
    super()
    this._has_wings = true
  }
  use_its_wing_to_fly() {
    console.log(`No, chicken can't fly`)
  }
}

class Chimpanzee extends Animal {
}

class SuperPower {
  use_laser_vision(sound) {
    console.log(`${sound} ,It is using laser vision to burn its enemies!`);
  }

  be_invisible(sound) {
    console.log(`${sound} ,It is looking invisible now, no one can see him`)
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this._num_legs = 4
    this.superpower = new SuperPower()
  }
}

class Dog extends Animal {
  constructor() {
    super()
    this._num_legs = 4
    this._is_warm_blooded = true
    this.superpower = new SuperPower()
  }
}

let monyet = new Chimpanzee()
let ayam = new Chicken()
let kodok = new Frog()
let anjing = new Dog()
console.log(ayam);
ayam.use_its_wing_to_fly()
kodok.superpower.use_laser_vision('Pew Pew Pew')
anjing.superpower.be_invisible('Whoosh')
// console.log(anjing);
