let collection = {rnadnm: {name: 'Alexandra', next:'masjdrandm'},
masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
ntrandm: {name: 'Juliet', next: null}
}


const getName = (node) => {
    return node.name
}

const headNode = (linkedList, collection) => {
    return collection[linkedList]
}

const next = (head, collection) => {
    return collection[head.next]
}

const nodeAt = (idx, linkedList, collection) => {
    let node = collection[linkedList];

    for (let i = 0; i < idx; i++) {
        node = collection[node.next];
    }
    return node;
}

const addressAt = (idx, linkedList, collection) => {
    let node = collection[linkedList];
    if (idx != 0 ) {
        for (let i = 1; i < idx; i++) {
            node = node.next
        }
        return node['next']
    } 
    return linkedList
}


const indexAt = (node, collection, linkedList) => {
    let currentNode = collection[linkedList]
    let nextNode = collection[currentNode.next]
    let idx = 0;

    while (currentNode !== node) {
        currentNode = nextNode;
        idx++
    }
    return idx;
}

const insertNodeAt = (idx, name, linkedList, collection) => {
    let prev = nodeAt(idx - 1, linkedList, collection)
    let nextNode = nodeAt(idx , linkedList, collection)

    let nextAddress = addressAt(nextNode, linkedList, collection)

    prev.next = name
    let newNode = collection[name]
    newNode.next = nextAddress

}

const deleteNodeAt = (idx, linkedList, collection) => {
    let prev = nodeAt(idx - 1, linkedList, collection)
    let currentNode = collection[linkedList]
    let i = 0;
    while (i < idx) {
        prev = currentNode
        currentNode = collection[currentNode.next]
        i++
    }
    prev.next = currentNode.next
}
        