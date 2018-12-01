function createArray(str, data) {
    let x = data.toLowerCase().split(' ')
    let array = []
    for (let i=0; i<x.length; i++) {
        if(x[i].includes(str)) {
        array.push(x[i])
    }
    }
    return array
}
console.log(createArray('w', 'Were looking for a few people who are interested in modeling for some upcoming Favor promotions. No experience necessary, should take an hour or less, and compensation will be paid out in Favor credits. Fill out the form in the comments if youre interested!'))