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

export type Color = keyof typeof colors;
export type FontSize = keyof typeof sizes.font;
