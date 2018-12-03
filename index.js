"use strict"




class Animals {
    constructor (legs) {
        this.legs = legs
        this.type = 'Animalia'
        this.food = 'insect'
        this.superPower = new SuperPower()
    }

  }

class Frog extends Animals  {
    constructor() {
     super()
    }

  }

  class Chicken extends Animals  {
    constructor() {
     super ()
     this.legs = 2
    }

  }

  class Fish extends Animals  {
    constructor() {
     super()
     this.leg = 'No legs'
    }

  }

  class SuperPower  {
    constructor () {
        
    }

    laser_eyes () {
        return 'I have a laser eyes'
    }

    invisible () {
        return 'I can be invisble'
    }
}

  let fro = new Frog()
  let chic = new Chicken()
  let Nemo = new Fish ()
  console.log(fro);
  console.log(fro.superPower.invisible())
  console.log(chic);
  console.log(chic.superPower.laser_eyes());
  console.log(Nemo);
  console.log(Nemo.superPower.invisible());
  
  
  
  
  

