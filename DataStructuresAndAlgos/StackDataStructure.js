//stacks
//last in first out 
//LIFO


function createStack() {
    const array = []
    
    return {
        push(item) {
            array.push(item)
        },
        pop() {
            return array.pop()
        },
        peek() {
            return array[array.length-1]
        },
        get length() {
            return array.length
        },
        isEmpty() {
            return array.length === 0
        }
    }
}

c = createStack()
c.push('underwear')
c.push('socks')
c.push('pants')
console.log(c.peek())
c.pop()
console.log(c.peek())
console.log(c.length)