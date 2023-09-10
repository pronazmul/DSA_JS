class Stack {
  constructor() {
    this.db = ['a', 'b', 'c', 'd']
  }

  in(data) {
    this.db.push(data)
    return this.db
  }

  out() {
    this.db.pop()
    return this.db
  }

  pick() {
    return this.db[this.db.length - 1]
  }
}

let stack = new Stack()

console.log({ in: stack.in(1), out: stack.out(), pick: stack.pick() })
