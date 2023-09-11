class Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class DublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  insertLast(data) {
    let node = new Node(data)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }

  removeLast() {
    if (!this.head) return null

    let popped = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
    }

    this.tail = popped.prev
    this.tail.next = null
    popped.prev = null

    this.length--
  }

  insertFirst(data) {
    let node = new Node(data)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.length++
  }

  removeFirst() {
    if (!this.head) return null

    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0
    }

    this.head = removed.next
    this.head.prev = null
    this.length--
    return removed
  }

  getList() {
    let arr = []
    if (this.isEmpty()) return arr

    let currentNode = this.head
    while (currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr
  }
}

let list = new DublyLinkedList()
list.insertLast(5)
list.insertLast(10)
list.insertLast(15)
list.insertLast(20)
list.removeLast()
console.log({ list })
