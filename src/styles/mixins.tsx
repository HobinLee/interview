import { css } from 'styled-components';

export const screen = {
  mobile: 480,
  tablet: 720,
  pc: 1024,
};

export const media = (max: number | keyof typeof screen) =>
  typeof max === 'number'
    ? `@media only screen and (max-width: ${max}px)`
    : `@media only screen and (max-width: ${screen[max]}px)`;

export const onlyMobile = `@media only screen and (min-width: ${screen.mobile}px) {
  display: none;
}`;

export const flexCenter = css`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`;
