"use strict"

class Animals {
    constructor() {
        this.num_legs = 4;
        this.has_fur = true;
        this.breed_with = 'birth';
        this.is_warm_blood = true;
        this.superpower = new SuperPower();
    }
}

class Fox extends Animals{
    constructor(){
        super();
    }
}

class Chimpanzee extends Animals{
    constructor(){
        super();
    }
}

class Frog extends Animals{
    constructor(){
        super();
        this.has_fur = false;
        this.breed_with = 'lay eggs';
        this.is_warm_blood = false;

    }
}

class Crocodile extends Animals{
    constructor(){
        super();
        this.has_fur = false;
        this.breed_with = 'lay eggs';
        this.is_warm_blood = false;
    }
}

class Chicken extends Animals{
    constructor(){
        super();
        this.num_legs = 2;
        this.breed_with = 'lay eggs';
    }
}

class SuperPower {
    constructor(){
    }

    sharp_teeth(){
        return `Bite with sharp teeth`;
    }

    use_poison(){
        return `Deadly poison`;
    }

    use_beak(){
        return `Peck with beak`;
    }
}

let frog = new Frog();
let fox = new Fox();
let chimpanzee = new Chimpanzee();
let crocodile = new Crocodile();
let chicken = new Chicken();
console.log(chimpanzee.superpower.sharp_teeth());
console.log(crocodile);
console.log(frog);

