import { pointsColorConfig } from "@/config/pointsColorConfig";

export const ScoreSettings = {
  qualified : 60,
  defaultR : 2,
  yWeight: 0.5,
  xWeight: 0.5
};

export function grade_rule(size, q_ed, vy) {
  switch (q_ed) {
    case 0: return 'red';
    case size: return 'green';
    default: return vy >= 60 ? 'blue' : 'yellow'
  }
}

const weightOf = (x, y, setting) =>  (setting.yWeight * y) + (setting.xWeight * x);

export function scoreOf(stu) {
  return weightOf(stu.vx, stu.vy, ScoreSettings)
}

export function roomInfosOf(list) {
  const roomSize = list.length;

  let
    qualifiedNum = roomSize,
    stu,
    grade,
    vx = 0,
    vy = 0

  for (let i = 0; i < roomSize; i++) {
    stu = list[i];

    vx += stu['vy'];
    vy += stu['vx'];

    stu.gua && (qualifiedNum -= 1);
    //counter
  }

  vy = Math.floor(vy / roomSize);
  grade = grade_rule(roomSize, qualifiedNum, vy);

  //对应room.infos
  return {
    grade,//等级 即颜色
    color: pointsColorConfig.color_mapping[grade].color,
    r: Math.sqrt(Math.pow(roomSize, 3)) + ScoreSettings.defaultR,// 圆点半径
    vx: Math.floor(vx / roomSize),
    vy
  }
}
