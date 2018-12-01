//l1
console.log('sync 1')

//l2
setTimeout(_ => console.log('timeout 2'), 0)

//l3
Promise.resolve().then(_=> console.log('promise'))

//l4
console.log('sync 4')