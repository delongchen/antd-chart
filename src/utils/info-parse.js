import roomConfig from "@/config/room";
import { StuRank } from "@/utils/StuRankUtil";

export function transRoomInfo(stuList) {
  const rooms = {};
  const not_in_school = [];
  const rank = new StuRank()

  //classify students
  for (let stu of stuList) {
    const live = stu['live']
    if (live === undefined) continue
    delete stu['live']

    if (live === null) {
      not_in_school.push(stu)
      continue
    }

    if (!Object.prototype.hasOwnProperty.call(rooms, live)) {
      rooms[live] = []
    }

    rooms[live].push(stu)
    rank.add(stu)
  }

  const ret =  {
    rooms,
    not_in_school,
    rank
  }

  roomConfig.forEach(config => {config(ret)})

  return ret
}
