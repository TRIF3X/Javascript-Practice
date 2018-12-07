//queue data structure
//first in first out
function createQueue() {
    const queue = []

    return {
        enqueue(item) {
            queue.unshift(item)
            //add item to front of queue
        },
        dequeue() {
            return queue.pop()
            //remove item from end of queue
        },
        peek() {
            return queue[queue.length-1]
            //checks the last item in the queue
        },
        get length() {
            return queue.length
            //how many items are in the queue
        },
        isEmpty() {
            return queue.length === 0
            //checks for an empty queue
        }
    }
}
const q = createQueue()
q.enqueue('cookies') 
q.enqueue('cream')
q.enqueue('butter')
console.log(q.peek())
q.dequeue()
console.log(q.peek())
q.dequeue()
console.log(q.peek())
q.dequeue()
console.log(q.isEmpty())