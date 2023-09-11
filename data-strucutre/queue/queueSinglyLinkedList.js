class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class QueueSingly {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  in(value) {
    let node = new Node(value)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.length++
  }

  out() {
    if (!this.head) return null

    let removed = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      let currentNode = this.head
      while (currentNode) {
        if (currentNode.next.value === removed.value) {
          this.tail = currentNode
          currentNode.next = null
          break
        }
        currentNode = currentNode.next
      }
    }
    this.length--
    return removed
  }

  list() {
    let array = []
    let currentNode = this.head

    while (currentNode) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

let queueSingly = new QueueSingly()
queueSingly.in('nazmul')
queueSingly.in('kamrul')
queueSingly.in('subahan')
queueSingly.out()
queueSingly.out()

console.log(queueSingly.list())
