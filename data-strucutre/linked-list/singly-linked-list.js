class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class singlyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  insertLast(data) {
    let newData = new Node(data)

    if (this.isEmpty()) {
      this.head = newData
      this.tail = newData
    } else {
      this.tail.next = newData
      this.tail = newData
    }

    this.length++
  }

  removeLast() {
    if (!this.head) return null

    if (this.length === 1) {
      let removed = this.head
      this.head = null
      this.tail = null
      this.length = 0
    }

    let current = this.head
    let last = this.tail
    let newLast

    while (current) {
      if (current.next == last) {
        newLast = current
        break
      }
      current = current.next
    }

    let removed = last

    newLast.next = null
    this.tail = newLast
    this.length--
  }

  removeFirst() {
    if (!this.head) return null

    if (this.length === 1) {
      let removed = this.head
      this.head = null
      this.tail = null
      this.length = 0
    }

    this.head = this.head.next
    this.length--
  }

  insertFirst(data) {
    let newData = new Node(data)
    if (this.isEmpty()) {
      this.head = newData
      this.tail = newData
    } else {
      newData.next = this.head
      this.head = newData
    }
    this.length++
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

let list = new singlyLinkList()
list.insertLast(5)
list.insertLast(10)
list.insertFirst(30)
list.insertFirst(200)

console.log({ list: list.getList() })
