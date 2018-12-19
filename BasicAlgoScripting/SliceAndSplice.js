// You are given two arrays and an index.

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    //make copy of both arrays
    let copy = arr1.slice()
    let solution = arr2.slice()
    //splice the first array after n with a shallow copy
    solution.splice(n,0,...copy)
    return solution;
  }
  
 console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));