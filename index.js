"use strict"
class Animal {
  constructor () {
    this.legs = 2
    this.eyes = 2
    this.superpower = new Superpower()
  }
}

class Frog extends Animal {
  constructor () {
    super()
    this.amphibi = true
  }
}

class Bat extends Animal {
  constructor() {
    super()
    this.nocturnal = true
  }
}

class Cow extends Animal {
  constructor() {
    super()
    this.legs = 4
  }
}

class Superpower {
  use_laser_vision () {
    return 'mampus'
  }

  use_ultra_sound () {
    return 'wik wikwik wikwik'
  }

  use_kamekameha () {
    return 'kamekameha'
  }
}

let frog = new Frog()
console.log(frog.superpower.use_laser_vision());
console.log(frog.superpower.use_ultra_sound());

let cow = new Cow()
console.log(cow.superpower.use_kamekameha());