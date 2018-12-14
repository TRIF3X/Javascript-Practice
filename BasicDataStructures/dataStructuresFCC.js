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

//remove items using splice()
//splice modifies the existing array and also returns a NEW array containing the removed elements
function sumOfTen(arr) {
    //first number is the index it starts at then where it ends
    arr.splice(1, 2)
    return arr.reduce((a, b) => a + b);
  }
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//add items using splice()
//replaces the item at the start index to the ending index
function htmlColorNames(arr) {
    arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 
  'PaleTurqoise', 'FireBrick']));

//copy array items using slice()
//slice does NOT modify an array, it copies or extrats from an array
function forecast(arr) {
    let newArr = arr.slice(2,4)
    return newArr;
  }
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//copy an array using the spread operator ...arr
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
    newArr.push([...arr])
      num--;
    }
    return newArr;
  }
  console.log(copyMachine([true, false, true], 2));

//combine arrays with the spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =  ['learning', ...fragment , 'is', 'fun']
  return sentence;
}
console.log(spreadOut());

//check for an element with indexOf(), returns index of the element OR -1 if it isn't found
function quickCheck(arr, elem) {
 if (arr.indexOf(elem) === -1) {
   return false;
 }
 return arr.indexOf(elem) + ' ' + elem
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));

//iterate through all an array's item using FOR loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] === elem)) {
      newArr.push(arr[i])
    }  
  }
  return newArr;
}
console.log(filteredArray([3, 2, 3, 1, 6, 3, 3, 13, 26, 19, 3, 9], 3));

//Create complex multi-dimensional arrays
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested', ['deep', ['deeper',['deepest']]]],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];
console.log(myNestedArray[0][7][1][1])

//Add key-value pairs to javascript objects
let fruits = {
  apples: 25,
  oranges: 32,
  plums: 28
};


fruits['bananas'] = 13

fruits['grapes'] = 35

fruits['strawberries'] = 27

console.log(fruits);

//modify an object nested within an object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
//bracket notation
userActivity['data']['online'] = 45
//dot notation
userActivity.data.online = 44

console.log(userActivity);

//Access property names with bracket notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
}

function checkInventory(scannedItem) {
    return foods[scannedItem]
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
