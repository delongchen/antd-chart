export const pointsColorConfig = {
  color_mapping: {
    red: {
      color: '#ff3274',
      icon: 'frown',
      description: '全员挂科且平均成绩不及格',
      tag: '危险预警',
    },
    yellow: {
      color: '#ffca3b',
      icon: 'meh',
      description: '寝室平均成绩不及格但有人未挂科',
      tag: '待提升'
    },
    blue: {
      color: '#42d9e5',
      icon: 'smile',
      description: '寝室平均成绩及格但有人挂科',
      tag: '合格'
    },
    green: {
      color: '#8bdc54',
      icon: 'star',
      description: '反正就是优秀',
      tag: '优秀'
    }
  }
}
