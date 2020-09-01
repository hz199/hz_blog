
class Stack {
  constructor (items = []) {
    this.items = items
  }

  push (item) {
    this.items.push(item)
  }

  pop () {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  size () {
    return this.items.length
  }

  toString () {
    return this.items.toString()
  }
}

const s = new Stack()
console.log(s)