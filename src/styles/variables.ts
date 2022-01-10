export const sizes = {
  font: {
    smaller: '0.6rem',
    small: '0.8rem',
    normal: '1rem',
    default: '1rem',
    large: '1.2rem',
    larger: '2rem',
  },
};

export const colors = {
  black: '#333',
  white: '#fff',
  darkGray: '#666',
  gray: '#ccc',
  lightGray: '#eee',
  red: '#c14e4e',
  green: '#7fb198',
  blue: '#5e5edb',
};

export const borders = {
  round: '50%',
  smaller: '0.2rem',
  small: '0.4rem',
  normal: '0.8rem',
  large: '1.2rem',
  larger: '1.6rem',
  none: '0',
};

export type Color = keyof typeof colors;
export type FontSize = keyof typeof sizes.font;
export type BorderRadius = keyof typeof borders;
export type FontWeight = 'normal' | 'bold' | 'light' | 'default';
export type TextAlign = 'left' | 'center' | 'right';
