import roomConfig from "@/config/room";
import { StuRank } from "@/utils/StuRankUtil";
import { scoreOf } from "@/utils/scoreUtils";


function initStu(stu) {
  const {vx, vy, bk} = stu.other.record
  Object.assign(stu, {
    vx,
    vy,
    gua: bk
  })

  stu.old = Math.floor((Date.now() - new Date(stu.birthday)) / 31536000000)
  stu.sex = stu.sex === '1' ? '男': '女'
  stu.score = scoreOf(stu)
  stu.leader = stu.leader === 'by' ? '白银': '？？？'
  stu.tag = []
}

export function transRoomInfo(stuList) {
  const rooms = {};
  const not_in_school = [];
  const rank = new StuRank()

  //classify students
  for (const stu of stuList) {
    const live = stu['live']

    if (live) {
      initStu(stu)
      rank.add(stu)

      ;(rooms[live] || (rooms[live] = [])).push(stu)
    }
    else not_in_school.push(stu)
  }

  rank.build()
  const ret =  {
    rooms,
    not_in_school,
    rank
  }

  roomConfig.forEach(config => {config(ret)})

  return ret
}
