interface AnimalConfig {
    name: string;
    species?: string;
    paws?: number;
    color?: string   
}



class Animal implements AnimalConfig {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}

class Cat extends Animal {
    species: "cat";
    paws: 4;
    color?: string;

    constructor(name:string, color?:string){
        super(name);
        this.species = "cat";
        this.paws = 4;
        this.color = color;
    }
}

class Dog extends Animal {
    species: "dog";
    paws: 4;
    color?: string;
    
    constructor(name:string,color?:string){
        super(name)
        this.species = "dog";
        this.paws = 4;
        this.color = color;
    }
}

class Bird extends Animal {
    species: "bird";
    paws: 2;
    color?: string;
    
    constructor(name:string,color?:string){
        super(name)
        this.species = "bird";
        this.paws = 2;
        this.color = color;
    }
}

class Fish extends Animal {
    species: "fish";
    paws: 0;
    constructor(name:string){
        super(name)
        this.species = "fish";
        this.paws = 0;
    }
}

class Invertebrate extends Animal {
    species: "invertebrate";
    paws: 0;
    constructor(name:string){
        super(name);
        this.species = "invertebrate";
        this.paws = 0;
    }
}

function takePicture (animal: AnimalConfig): void {
    console.log(`You take a picture of a ${animal.name}`);
}

function meow (animal: Cat) {
    console.log (`${animal.name} says meeeEEOOOooow`);
}

function bark (animal: Dog) {
    console.log (`${animal.name} says WHOUFF`);
}

function swim (animal: Fish) {
    console.log(`${animal.name} disapear under water`)
}

function fly (animal: Bird) {
    console.log(`${animal.name} flies away`)
}

function caress (animal: AnimalConfig) {
    if (animal.paws === 4) {
        console.log(`You try to caress a ${animal.species}`)
    }else {console.log('What are you trying to do?')}
}

function feed (animal: AnimalConfig) {
    if (animal.color === "noir") {
        console.log(`You are feeding a ${animal.name}`)
    }
}

const animal1 = new Cat("Chat Européen", "noir");
const animal2 = new Cat ("Chat chartreux");
const animal3 = new Dog ("Chien Terre-neuve", "noir");
const animal4 = new Dog ("Chien Moon Moon");
const animal5 = new Bird ("Mésange");
const animal6 = new Bird ("Merle", "noir");
const animal7 = new Fish('Requin');
const animal8 = new Fish ('Thon');
const animal9 = new Invertebrate('Lombric')




