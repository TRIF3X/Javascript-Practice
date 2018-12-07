//Write a function called getProduct that gets the product of all the integers at the array EXCEPT the one at that index.
// Example calculation [9 * 6 * 5 * 2, 1 * 6 * 5 * 2, 1 * 9 * 5 * 2, 1 * 9 * 6 * 5].
function getProduct(arr) {
  let newArr = []
  for (let i = 0; i<arr.length; i++) {
    if(!(arr[i] === arr[0])) {
      let total = arr[i] * arr[i]
      newArr.push(total)
    }
  }
  return newArr
}
console.log(getProduct([1, 9, 6, 5, 2])) //Should return  [540, 60, 90, 108,  270]

//not done