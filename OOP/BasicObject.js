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
