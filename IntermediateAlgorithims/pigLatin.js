// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is called "Pig Latin" and it gets more complicated than the rules in this particular challenge. I've intentionally kept things simple, otherwise this would quickly turn into an extremely tedious challenge.
// Rules
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.
// Examples
// "Cats are great pets." ➞ "Atscay areway reatgay etspay."

// "Tom got a small piece of pie." ➞ "Omtay otgay away allsmay iecepay ofway iepay."

// "He told us a very exciting tale." ➞ "Ehay oldtay usway away eryvay excitingway aletay."
// Notes
// Be sure to preserve proper capitalization and punctuation.

function pigLatin(str) {
    let solution = []
    checkForVowel = /[aeiou]/ig
    let splitStr = str.split(' ')

    //check to see if the str starts with a vowel
    if(str[0].match(checkForVowel)) {
        solution.push(str + 'way')

    } else {
        
       for (let i=0; i<splitStr.length;i++) {
           letters = splitStr[i].split('')
           letters.push(letters.splice(0,1)+"ay");
           word = letters.join('');
           solution.push(word);
       }

    }

    return solution.join(' ')

}
console.log(pigLatin('Tom got a small piece of pie'))

