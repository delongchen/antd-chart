function TagTypes() {
  this.count = 0
  this.tags = {}
  this.w = []
}

TagTypes.prototype.add = function (title) {
  this.tags[title] = this.count
  this.w[this.count++] = []
}

TagTypes.prototype.getW = function () {
  return this.w
}

const tagTypes = new TagTypes()

tagTypes.add('ScholarShip2018')
tagTypes.add('GeneralPoverty')
tagTypes.add('ScholarShip2019')
tagTypes.add('GoodGoodGoodStudent')

export default tagTypes
