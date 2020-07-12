import roomConfig from "@/config/room";

export function transRoomInfo(stuList) {
  let rooms = {};
  let not_in_school = [];

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
  }

  const ret =  {
    rooms,
    not_in_school
  }

  roomConfig.forEach(config => {config(ret)})

  return ret
}
