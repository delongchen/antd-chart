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

  stu.score = scoreOf(stu)
  stu.tag = []
}

export function transRoomInfo(stuList) {
  const rooms = {};
  const not_in_school = [];
  const rank = new StuRank()

  //classify students
  for (const stu of stuList) {
    const live = stu['live']

    if (!live) not_in_school.push(stu)
    else {
      initStu(stu)
      rank.add(stu);

      (rooms[live] || (rooms[live] = [])).push(stu)
    }
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
