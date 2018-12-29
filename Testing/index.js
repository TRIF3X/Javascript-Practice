function greet(name){
    return `Hello, ${name} how are you doing today?`
 }

 function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i=0; i<arrayOfSheep.length; i++) {
      if(arrayOfSheep[i] === true) {
        count += 1
      }  
    }
    return count
  }

module.exports = {
    greet,
    countSheeps
}