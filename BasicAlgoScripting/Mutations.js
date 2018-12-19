// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    let split2 = arr[1].toLowerCase()
    let split1 = arr[0].toLowerCase()

    for (let i=0; i<split2.length; i++) {
        if (split1.indexOf(split2[i]) < 0) {
            return false
        }    
    }
    return true
}
  
  console.log(mutation(["hello", "ne"]));