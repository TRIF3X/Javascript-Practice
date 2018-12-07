// Queue data structure
// Priority queue

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

createPriorityQueue = () => {
    const lowPriorityQueue = createQueue()
    const highPriorityQueue = createQueue()

    return {
        enqueue(item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        dequeue() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue()
            } 
                return lowPriorityQueue.dequeue()
        },
        peek() {
            if (!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek()
            } 
                return lowPriorityQueue.peek()
        },
        length() {
            return highPriorityQueue.length + lowPriorityQueue.length
        },
        isEmpty() {
            return (
                highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
            )
        }
    }
}

const q = createPriorityQueue()

q.enqueue('A fix here')
q.enqueue('A bug there')
q.enqueue('A new feature')

q.dequeue()
q.enqueue('Emergency!', true)
q.dequeue()
console.log(q.peek())
