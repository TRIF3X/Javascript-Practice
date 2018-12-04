//Javascript arrays are zero-indexed, meaning the first element is at the zeroth position
//Arrays are mutatable

//Access an array's contents using bracket notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = 'Javascript is fun'
console.log(myArray);

//Add items to an array with push() and unshift()
function mixedNumbers(arr) {
      arr.unshift('I', 2, 'three')
      arr.push(7, 'VIII', 9)
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));

  //remove items from an array with pop() and shift()
  function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));