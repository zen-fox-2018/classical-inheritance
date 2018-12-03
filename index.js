"use strict"

class Animal {
  constructor() {
    this.num_legs = 4
    this.is_warm_blooded = true
    this.food = 'friends'
    this.superPower = new SuperPower()
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super()
    this.is_warm_blooded = false
    this.num_legs = 2
  }
}

class Tiger extends Animal {
  constructor() {
    super()
    this.food = 'meat'
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this.food = 'bugs'
  }
}

class Duck extends Animal {
  constructor() {
    super()
    this.num_legs = 2
    this.food = 'vegetables'
  }
}

class SuperPower {
  constructor() {
  }

  zombieHunter() {
    this.sense = `Kamu dapat membantu manusia dengan Panca Indera kamu yang tajam ketika terjadi Zombie Apocalypse dengan memangsa berbagai jenis zombi`
  }
  fastClimber() {
    this.speed = '70 mph'
    this.desc = `Mengejar mangsa secepat kilat meskipun setinggi langit dengan kecepatan ${this.speed}`
  }  
}

let kodok = new Frog()
kodok.superPower.zombieHunter()

let bebek = new Duck('bebek')
bebek.superPower.fastClimber()

console.log(bebek);
console.log(kodok);




