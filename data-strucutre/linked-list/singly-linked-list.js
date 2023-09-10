class singlyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  in(data) {
    let newData = { value: data, next: null }

    if (this.isEmpty()) {
      this.head = newData
      this.tail = newData
    } else {
      this.tail.next = newData
      this.tail = newData
    }

    this.length++
  }
}

let list = new singlyLinkList()
list.in(5)
list.in(10)
list.in(15)
list.in(20)
list.in(25)
console.log({ list })
