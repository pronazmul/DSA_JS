class Stack {
  constructor() {
    this.arr = ['a', 'b', 'c', 'd']
  }

  in(data) {
    this.arr.push(data)
    return this.arr
  }

  out() {
    this.arr.pop()
    return this.arr
  }

  lookup() {
    return this.arr[this.arr.length - 1]
  }
}

let stack = new Stack()

console.log({ in: stack.in(1), out: stack.out(), lookup: stack.lookup() })
