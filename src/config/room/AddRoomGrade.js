import { roomInfosOf } from "@/utils/scoreUtils";

function Room(list, name) {
  this.list = list;
  this.name = name;
  this.infos = roomInfosOf(list);
}

export default function (who) {
  const
    ret = [],
    tmp = who.rooms,
    gradeCounter = {
      red: [],
      yellow: [],
      blue: [],
      green: []
    }
    let
      count = 0,
      max_x = -1,
      max_y = -1,
      min_x = 100,
      min_y = 100,
      now_x,
      now_y;

  for (const roomName in tmp) {
    if (Object.prototype.hasOwnProperty.call(tmp, roomName)) {
      const room = new Room(tmp[roomName], roomName);

      if ((now_x = room.infos.vx) > max_x) max_x = now_x;
      if ((now_y = room.infos.vy) > max_y) max_y = now_y;

      if (now_x < min_x) min_x = now_x;
      if (now_y < min_y) min_y = now_y;

      room.key = count++
      gradeCounter[room.infos.grade].push(room);
      ret.push(room)
    }
  }

  who.rooms = ret;
  who.gradeCounter = gradeCounter;
  who.max = {
    vx: max_x,
    vy: max_y
  };
  who.min = {
    vx: min_x,
    vy: min_y
  }
}
