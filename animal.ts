class Animal{
    name: string;
    distance: number;
    sound: string;

    // Constructor
    constructor() {

    }

    // MakeSound function
    makeSound() {
        console.log(' I am ' + this.name + ' and i make sound ' + this.sound);
    }

    // Move Function to track Speed
    move(distance) {
        console.log(' I move ' + distance + 'km per hour');
    }
 }

// Cat Class Extending Animal Class
class Cat extends Animal {
    public sound = 'Meow' ;
    public name = 'Cat' ;

    // Constructor in which Super is called for Parent Class
    constructor() {
        super();
    }
}

// Dog Class Extending Animal Class
class Dog extends Animal {
    public sound = 'Woof !' ;
    public name = 'Dog' ;

    // Constructor in which Super is called for Parent Class
    constructor() {
        super();
    }
}

// Call of Cat Class
const cat = new Cat;
cat.makeSound();
cat.move(60);

// Call of Dog Class
const dog = new Dog;
dog.makeSound();
dog.move(20);

