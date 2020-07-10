export function HS() {
  this.store = {}
}

HS.prototype.add = function (hash, id) {
  this.store[hash] = id
}

HS.prototype.find = function (li) {
  const ret = this.store[li.join('-')]
  return ret === undefined ? null : ret
}
