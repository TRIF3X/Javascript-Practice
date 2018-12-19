// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let solution = []

    for(let i=0; i<arr.length; i++) {
        //checks each itteration for a truthy value
        if(arr[i]) {
        solution.push(arr[i])
        }
    }
    
    return solution;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));

  //solution with filter

//   function bouncer(arr) {
//     arr.filter(Boolean)
//   }