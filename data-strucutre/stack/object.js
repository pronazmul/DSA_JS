class Stack {
  constructor() {
    this.db = {}
    this.count = 0
  }

  in(data) {
    this.count++
    this.db[this.count] = data
    return this
  }

  out() {
    delete this.db[this.count]
    this.count--
    return this
  }

  pick() {
    return this.db[this.count]
  }
}

let stack = new Stack()

console.log({ in: stack.in(1) })
console.log({ in: stack.in(5) })
console.log({ in: stack.in(9) })
console.log({ out: stack.out() })
console.log({ pick: stack.pick() })
