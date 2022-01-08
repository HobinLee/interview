import {
  FontSize,
  Color,
  colors,
  BorderRadius,
  borders,
} from '@src/styles/variables';
import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  fontSize?: FontSize;
  color?: Color;
  isFilled?: boolean;
  block?: boolean; // width: 100%
  borderRadius?: BorderRadius;
}

export const Button: FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  className,
  fontSize = 'default',
  color = 'gray',
  isFilled,
  block = false,
  borderRadius = 'small',
  children,
  onClick,
}) => (
  <ButtonWrap
    onClick={onClick}
    className={className}
    fontSize={fontSize}
    color={color}
    isFilled={isFilled ?? false}
    block={block}
    borderRadius={borderRadius}
  >
    {children}
  </ButtonWrap>
);

const outlineStyle = (color: Color) => css`
  border: 1px solid ${colors[color]};
  background: none;
  color: ${colors[color]};
`;
const strokeStyle = (color: Color) => css`
  border: 1px solid ${colors[color]};
  background-color: ${colors[color]};
  color: ${color === 'white' || color === 'lightGray'
    ? colors.black
    : colors.white};
`;

const ButtonWrap = styled.button<Required<ButtonProps>>`
  ${({ fontSize, color, isFilled, block, borderRadius }) => css`
    font-size: ${fontSize};
    outline: none;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: ${borders[borderRadius]};
    ${isFilled ? strokeStyle(color) : outlineStyle(color)}
    ${block &&
    css`
      width: 100%;
    `};

    &: hover {
      ${isFilled
        ? css`
            opacity: 0.8;
          `
        : strokeStyle(color)}
      opacity: 0.8;
    }
  `}
`;
