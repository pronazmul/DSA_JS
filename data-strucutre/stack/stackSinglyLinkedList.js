class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class StackSingly {
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
    let removed = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = removed.next
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

let stackSingly = new StackSingly()
stackSingly.in('nazmul')
stackSingly.in('kamrul')
stackSingly.in('subahan')

console.log(stackSingly.list())
