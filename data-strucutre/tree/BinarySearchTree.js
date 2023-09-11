class Node {
  constructor(value) {
    this.value = value
    this.leftNode = null
    this.rightNode = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    } else {
      let currentNode = this.root
      let added = false

      while (!added && currentNode) {
        if (value === currentNode.value) {
          return 'Duplicate Value is not Allowed!'
        } else if (value < currentNode.value) {
          if (!currentNode.leftNode) {
            currentNode.leftNode = new Node(value)
            added = true
          } else {
            currentNode = currentNode.leftNode
          }
        } else if (value > currentNode.value) {
          if (!currentNode.rightNode) {
            currentNode.rightNode = new Node(value)
            added = true
          } else {
            currentNode = currentNode.rightNode
          }
        }
      }
    }
  }

  search(value) {
    if (!this.root) {
      return 'No Data Found!'
    }
    let currentNode = this.root
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      } else if (value > currentNode.value) {
        currentNode = currentNode.rightNode
      } else {
        currentNode = currentNode.leftNode
      }
    }
  }
}

const BST = new BinarySearchTree()

BST.insert(10)
BST.insert(9)
BST.insert(11)

console.log(BST)

console.log(BST.search(10))
