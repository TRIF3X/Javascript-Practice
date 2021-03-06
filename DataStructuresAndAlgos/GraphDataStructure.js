// Graphs
// A collection of nodes aka vertices
// Nodes may point to other nodes, known as edges

function createNode(key) {
    const neighbors = []

    return {
        key,
        neighbors,
        addNeighbor(node) {
            neighbors.push(node)
        }
    }
}

function createGraph(directed = false) {
    const nodes = []
    const edges = []

    return {
        directed,
        nodes,
        edges,

        addNode(key) {
            nodes.push(createNode(key))
        },
        getNode(key) {
            return nodes.find(node => node.key === node)
        },
        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key)
            const node2 = this.getNode(node2key)

            nodes1.addNeighbor(nodes2)
            edges.push(`${node1key}-${node2key}`)

            if (!directed) {
                node2.addNeighbor(node1)
            }
        },

        print() {
            return nodes.map(({ key, neighbors }) => {
                let result = key

                if (neighbors.length) {
                    result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
                }
                return result
            })

            .join('/n')
        }
    }
}

