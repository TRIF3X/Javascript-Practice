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