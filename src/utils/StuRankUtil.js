import { scoreOf } from "@/utils/scoreUtils";

export function StuRank() {
  this.count = 0
  this._rank = []
}

StuRank.prototype.add = function (stu) {
  stu.key = this.count++

  const {vx, vy, bk} = stu.other.record

  Object.assign(stu, {
    vx,
    vy,
    gua: bk
  })

  stu.score = scoreOf(stu)
  stu.tag = []
  this._rank.push(stu)
}

StuRank.prototype.build = function () {
  this._rank.sort((a, b) => {
    return b.score - a.score
  })
}

StuRank.prototype.find = function (start, end) {
  const size = this._rank.length
  start = Math.floor(start * size)
  end = Math.floor(end * size)

  return this._rank.slice(start, end)
}

StuRank.prototype.frontPercent = function (n) {
  return this.find(0, n / 100)
}

StuRank.prototype.behindPercent = function (n) {
  return this.find((1 - n / 100), 1)
}
