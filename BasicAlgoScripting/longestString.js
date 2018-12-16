// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
    let split = str.split(' ')
    let result = 0
    for (let i=0; i< split.length; i++) {
        if(split[i].length > result) {
            result = split[i].length
        }
    }
    return result
}


console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));