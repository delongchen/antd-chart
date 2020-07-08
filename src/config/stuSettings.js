export const color_mapping = {
  red: '#ff3274',
  yellow: '#ffca3b',
  blue: '#42d9e5',
  green: '#8bdc54'
};

export const settings = {
  qualified : 60,
  defaultR : 2,
  yWeight: 0.7,
  xWeight: 0.3
};

export function grade_rule(size, q_ed, vy) {
  switch (q_ed) {
    case 0: return 'red';
    case size: return 'green';
    default: return vy >= 60 ? 'blue' : 'yellow'
  }
}
