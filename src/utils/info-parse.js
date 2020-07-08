import {settings, color_mapping, grade_rule} from '@/config/stuSettings'

const weightOf = (x, y) =>  (settings.yWeight * y) + (settings.xWeight * x);

function roomInfosOf(list) {
  const roomSize = list.length;

  let
    qualifiedNum = roomSize,
    stu,
    grade,
    vx = 0,
    vy = 0,
    now_x,
    now_y;

  for (let i = 0; i < roomSize; i++) {
    stu = list[i];
    now_y = stu['vy'];
    now_x = stu['vx'];

    if ((stu.gua = (weightOf(now_x, now_y) < settings.qualified))) qualifiedNum -= 1;
    //counter
    vx += now_x;
    vy += now_y;
  }

  vy = Math.floor(vy / roomSize);
  grade = grade_rule(roomSize, qualifiedNum, vy);

  //对应room.infos
  return {
    grade,//等级 即颜色
    color: color_mapping[grade],
    r: Math.sqrt(Math.pow(roomSize, 3)) + settings.defaultR,// 圆点半径
    vx: Math.floor(vx / roomSize),
    vy
  }
}

function Room(list, name) {
  this.list = list;
  this.name = name;
  this.infos = roomInfosOf(list);
}

function addMoreInfosOf(who) {
  let
    ret = [],
    tmp = who.rooms,
    gradeCounter = {
      red: 0,
      yellow: 0,
      blue: 0,
      green: 0
    },
    max_x = -1,
    max_y = -1,
    min_x = 100,
    min_y = 100,
    now_x,
    now_y;

  for (let roomName in tmp) {
    if (Object.prototype.hasOwnProperty.call(tmp, roomName)) {
      let room = new Room(tmp[roomName], roomName);

      if ((now_x = room.infos.vx) > max_x) max_x = now_x;
      if ((now_y = room.infos.vy) > max_y) max_y = now_y;

      if (now_x < min_x) min_x = now_x;
      if (now_y < min_y) min_y = now_y;

      gradeCounter[room.infos.grade] += 1;

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

export function transRoomInfo(stuList) {
  let rooms = {};
  let not_in_school = [];

  //classify students
  for (let stu of stuList) {
    const live = stu['live'];
    if (live === undefined) continue;
    delete stu['live'];

    if (live === null) {
      not_in_school.push(stu);
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(rooms, live)) {
      rooms[live] = []
    }

    rooms[live].push(stu)
  }

  const ret =  {
    title: 'ddd',
    rooms,
    not_in_school
  };
  addMoreInfosOf(ret);

  return ret;
}
