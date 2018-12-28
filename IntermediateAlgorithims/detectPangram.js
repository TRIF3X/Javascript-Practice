// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function createABC() {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    abc = abc.toLowerCase().split('')
    return abc
}

function checkLetter(letter, arr) {
    for(let i = 0; i<=arr.length -1; i++) {
        if (letter === arr[i]) {
            arr.splice(i, 1)
        }
    }
}

function isPangram(string) {
    let abc = createABC()
    let str = string.toLowerCase().split(' ').join('').split('')
    for (let i=0; i<=str.length; i++) {
        checkLetter(str[i], abc)
    }
    if (abc.length === 0) {
        return true
    }
    return false
}



console.log(isPangram("The quick brown fox jumps over the lazy dog"))