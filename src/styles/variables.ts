export const sizes = {
  font: {
    small: '12px',
    default: '14px',
    large: '16px',
  },
};

export const colors = {
  black: '#333',
  white: '#fff',
  darkGray: '#666',
  lightGray: '#fefefe',
};

export const borders = {
  round: '50%',
  small: '2px',
  normal: '4px',
  large: '8px',
  none: '0',
};

export type Color = keyof typeof colors;
export type FontSize = keyof typeof sizes.font;
export type BorderRadius = keyof typeof borders;
