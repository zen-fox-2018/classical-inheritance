"use strict"
class Animals {
    constructor(eyes, feet) {
        this.eyes = eyes;
        this.feet = feet;
        this.superPowers = new SuperPowers
    }
}

class Frog extends Animals {
    constructor(eyes, feet, type, furry) {
        super(eyes, feet)
        this.type = type
        this.furry = furry
    }
}

class Bat extends Animals {
    constructor(eyes, feet, type, furry) {
        super(eyes, feet)
        this.type = type
        this.furry = furry
    }
}

class Chimpanzee extends Animals {
    constructor(eyes, feet, type, furry) {
        super(eyes, feet)
        this.type = type
        this.furry = furry
    }
}

class Fox extends Animals {
    constructor(eyes, feet, type, furry) {
        super(eyes, feet)
        this.type = type
        this.furry = furry
    }
}

class Chicken extends Animals {
    constructor(eyes, feet, type, furry) {
        super(eyes, feet)
        this.type = type
        this.furry = furry
    }
}

class SuperPowers {
    constructor() {}

    be_invisible() {
        console.log("Now you can't see me!");
    }

    secretly_a_ninja() {
        console.log("I'm going to kill you in your sleep")
    }

    ultra_sound() {
        console.log("Hear my wrath!")
    }


}

let frog = new Frog(2, 4, "Amphibi", false);
// let PowerUp = new SuperPowers()
let bat = new Bat(2, 2, "mamals", true);
let chimpanzee = new Chimpanzee(2, 2, "mamals", true);
let fox = new Fox(2, 4, "mamals", true);

chimpanzee.superPowers.be_invisible()
fox.superPowers.secretly_a_ninja()

// console.log(frog)
// console.log(bat)
console.log(chimpanzee)
// console.log(fox)

