class Queue {
  constructor() {
    this.db = []
  }

  in(data) {
    this.db.unshift(data)
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

let queue = new Queue()

console.log({ in: queue.in('a') })
console.log({ in: queue.in('b') })
console.log({ in: queue.in('c') })
console.log({ in: queue.in('d') })
console.log({ out: queue.out() })
console.log({ pick: queue.pick() })
