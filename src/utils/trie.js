export const Trie = function (val) {
  this.val = val
  this.children = null
  this.count = 0
  this.id = null
}

Trie.prototype.find = function (li) {
  let now = this
  while (li.length > 0) {
    if (now.children === null) return null
    const k = li.shift()
    if (now.children[k] === undefined) {
      return null
    }
    now = now.children[k]
  }
  return now
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
