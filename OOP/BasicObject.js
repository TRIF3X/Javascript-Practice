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

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property)
  }
}

console.log(ownProps)
console.log(canary.name)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------