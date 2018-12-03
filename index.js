"use strict"
class Animals {
    constructor(eyes, feet) {
        this.eyes = eyes;
        this.feet = feet;
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

let frog = new Frog(2, 4, "Amphibi", false);
let bat = new Bat(2, 2, "mamals", true);
let chimpanzee = new Chimpanzee(2, 2, "mamals", true);
let fox = new Fox(2, 4, "mamals", true);
console.log(frog)
console.log(bat)
console.log(chimpanzee)
console.log(fox)
