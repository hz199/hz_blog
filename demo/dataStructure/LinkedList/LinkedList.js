
class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  // 获取链表最后元素
  _findLastNode () {
    let currentNode = this.head

    while (currentNode.next) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  // 向尾部添加一个元素
  append (data) {
    const newNode = new Node(data)

    if (this.length === 0) {
      this.head = newNode
    } else {
      const currentNode = this._findLastNode()
      currentNode.next = newNode
    }

    this.length += 1
  }

  // 指定位置插入元素
  insert (position, data) {
    if (position < 0 || position > this.length) return false
    const newNode = new Node(data)
    // 1. 插入头部元素
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      // 插入 指定位置 的前一个元素
      let prevNode = null
      let currentNode = this.head
      let index = 0
      while (index ++ < position) {
        prevNode = currentNode
        currentNode = currentNode.next
      }

      prevNode.next = newNode
      newNode.next = currentNode
    }

    this.length += 1

    return true
  }

  // 指定位置添加元素
  get (position) {
    if (position < 0 || position >= this.length) return null
    let currentNode = this.head
    let index = 0
    while (index ++ < position) {
      currentNode = currentNode.next
    }

    return currentNode.data
  }

  // 查找元素的位置
  indexOf (data) {
    let currentNode = this.head
    let index = 0

    while (currentNode) {
      if (currentNode.data === data) {
        return index
      } else {
        currentNode = currentNode.next
        index += 1
      }
    }

    return -1
  }

  // update 修改固定位置元素
  update (position) {

  }

  // 删除
  removeAt (position) {

  }

  remove(data) {

  }

  isEmpy () {

  }

  size () {

  }

  toString() {
    let currentNode = this.head
    let str = ''

    while (currentNode) {
      str += currentNode.data + ','
      currentNode = currentNode.next
    }

    return str.substr(0, str.length - 1)
  }
}

const linkedList = new LinkedList()
linkedList.append(2)
linkedList.append(4)
linkedList.append(3)
linkedList.append(6)
linkedList.insert(2, 1)
console.log(linkedList.toString())
console.log('get(4)', linkedList.get(4))
console.log('indexOf(3):', linkedList.indexOf(3))
