export const Trie = function (val) {
  this.val = val
  this.children = null
  this.count = 0
  this.id = null
}

Trie.prototype.find = function (li) {
  if (li.length > 0) {
    if (this.children === null) return null
    const now = li.shift()
     return this.children[now] !== undefined ? this.children[now].find(li) : null
  }
  return this
}

Trie.prototype.add = function (li, id) {
  if (li.length > 0) {
    const now = li.shift()
    this.children === null && (this.children = {})
    this.children[now] = new Trie(now)
    this.children[now].add(li, id)
  }
  else {
    this.id = id
    this.count += 1
  }
}
