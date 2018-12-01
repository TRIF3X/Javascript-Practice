//using the test method using .text()

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result)

//match literal strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let literal = waldoRegex.test(waldoIsHiding);
console.log(literal)

//match literal strings with different possibilites
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; //using the 'or' operator, we search if any of these words are found
let petSearch = petRegex.test(petString);
console.log(petSearch)

//ignore case while matching using the 'i' flag
let ignoreCaseString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let ignoreCase = fccRegex.test(ignoreCaseString);
console.log(ignoreCase)

//extract matches using .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let extractUsingMatch = extractStr.match(codingRegex);
console.log(extractUsingMatch)

//find more than the first match using the 'g' flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
let starMatch = twinkleStar.match(starRegex);
console.log(starMatch)

//match anything with wildcard '.'
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./;
let matchAnythingWildcard = unRegex.test(exampleStr);
console.log(matchAnythingWildcard)

//match single charecter with multiple possibilies
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let matchVowels = quoteSample.match(vowelRegex);
console.log(matchVowels)