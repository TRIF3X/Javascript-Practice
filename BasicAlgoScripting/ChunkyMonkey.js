//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
    let solution = []
    for (let i=0; i<arr.length; i+=size) {
        solution.push(arr.slice(i, i+size))
    }
    return solution
  }
  
 console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));