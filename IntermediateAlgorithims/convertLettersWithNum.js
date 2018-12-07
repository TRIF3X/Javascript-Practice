// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet.
// Rules
// Replace all letters with position in alphabet.
// If anything in the string isn't a letter, ignore it.
// a is 1, b is 2, c is 3, etc, etc.
// Examples
// "We have a lot of rain in June." ➞ "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5"

// "The river stole the gods." ➞ "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19"

// "Wow, does that work?" ➞  "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11"
// Notes
// Ignore non letter characters, otherwise there aren't any intentional gotchas.

function alphabetPosition(str) {
    //split nums into an array of letters
    let nums = str.split('');
    //split alphabet into an array of letters
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    //itterate through nums and at each itteration turn the letter 
    //into its index number + 1 because we start at the 0 index
    for (let i = 0; i < nums.length; i++) {
      nums[i] = alphabet.indexOf(nums[i].toLowerCase()) + 1;
    }
    //filter the nums array to remove all 0s then join the array
    return nums.filter(n => { if(n > 0) return n; } ).join(' ');
  }
    
  
console.log(alphabetPosition("Wow does that work?"));