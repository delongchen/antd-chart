export function parameterWrapper(val) {
  const parameter = {
    num_college: null,
    num_major: null,
    num_class: null,
    num_gr: null,
    sex: null,
  }
  const title = []
  const cmc = val['cmc']
  cmc[0] !== undefined && (parameter['num_college'] = cmc[0])
  cmc[1] !== undefined && (parameter['num_major'] = cmc[1])
  cmc[2] !== undefined && (parameter['num_class'] = cmc[2])
  parameter['num_gr'] = val['num_gr']
  parameter['sex'] = val['sex']
  for (const i in parameter)
    if (Object.prototype.hasOwnProperty.call(parameter, i))
      title.push(parameter[i])
  return {
    parameter,
    title
  }
}
