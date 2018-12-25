let dog = {
  name: 'red',
  numLegs: 4,
  sayLegs: function() {
    return `This dog has ${this.numLegs} legs`
  }
};

//using dot notation to access properties
console.log(dog.name)
console.log(dog.numLegs)
console.log(dog.sayLegs())

// --------------------------------------------------------------------------------------------------------------------------------------------------

//Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

function Dog() {
  this.name = 'bella',
  this.color = 'brown',
  this.numLegs = 4
}

//creates a new instance of our dog, 'this' always points to the new object
let hound = new Dog();
console.log(hound.name)
console.log(hound.color)
console.log(hound.numLegs)

// ------------------------------------------------------------------------------------------------------------------------------------------------------

//use variables to dynamicaly create an instance of dog
function Dog(name, color) {
  this.name = name,
  this.color = color,
  this.numLegs = 4
}

let terrier = new Dog('doggie', 'white')

console.log(terrier)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//Verify an object's constructor with instanceof

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4)

console.log(myHouse instanceof House)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

//let x in y allows you to loop through an objects props
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}

console.log(ownProps)
console.log(canary.name)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

//add numlegs to the Dog's prototype, allows for every instance of Dog to have numlegs

function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
console.log(beagle.numLegs)

//-----------------------------------------------------------------------------------------------------------------

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let shepard = new Dog("Snoopy");

let ownsProps = [];
let prototypeProps = [];

//if shepard props are own we push to ownProps, if it's on the prototype we push to prototypeProps
for (let property in shepard) {
  if(shepard.hasOwnProperty(property)) {
    ownsProps.push(property)
  } else {
    prototypeProps.push(property)
  }
}

console.log(ownsProps)
console.log(prototypeProps)

//--------------------------------------------------------------------------------------------------------------

function Dog(name) {
  this.name = name;
}

//check if the param is of the contructor Dog
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true
  }
  return false
}

console.log(joinDogFraternity(shepard))

//----------------------------------------------------------------------------------------------------------------
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log('nom nom nom')
  },
  describe: function() {
    console.log('my name is ' + this.name)
  }
};

const doggie = new Dog('doggie') 
console.log(doggie.numLegs)
doggie.eat()
doggie.describe()
console.log(doggie.constructor)

//----------------------------------------------------------------------------------------------------------------

function Dog(name) {
  this.name = name;
}

let snoop = new Dog("Snoopy");

//Dog is a parent prototype of snoop
console.log(Dog.prototype.isPrototypeOf(snoop))
//Object is the parent prototype of Dog
console.log(Object.prototype.isPrototypeOf(Dog.prototype))

//-----------------------------------------------------------------------------------------------------------------

function Animal() { }

//Known as the parent OR supertype
Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};

//Duck and lion are given the properties from Animal
let duck = Object.create(Animal.prototype); 
let lion = Object.create(Animal.prototype); 

console.log(duck.eat); 
console.log(lion.eat); 

//------------------------------------------------------------------------------------------------------

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

//Dog now inherits all the props from Animal
Dog.prototype = Object.create(Animal.prototype)

let ginger = new Dog();
ginger.eat();  

//-------------------------------------------------------------------------------------------------------------

function Animal() { }
function Bird() { }
function Dog() { }

//inherit props from Animal
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

//reset inherintence to their respective animal
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let seagle = new Bird();
let puppy = new Dog();

//puppy and seagle are no longer from Animal but from Bird and Dog, Animal is a supertype of Bird and Dog still
console.log(puppy.constructor)
console.log(seagle.constructor)

//--------------------------------------------------------------------------------------------------------------

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog
Dog.prototype.bark = function() {
    console.log('Woof!')
}

let pup = new Dog();

pup.eat(); // Should print "nom nom nom"
pup.bark(); // Should print "Woof!"

//----------------------------------------------------------------------------------------------------------

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
//Penguin inherits Bird(supertype) props
Penguin.prototype = Object.create(Bird.prototype);
//Penguin now owns its own constructor
Penguin.prototype.constructor = Penguin;

//overwrite fly on the supertype Bird
Penguin.prototype.fly = () => {
    return 'Alas, this is a flightless bird.'
}


let penguin = new Penguin();
console.log(penguin.fly());