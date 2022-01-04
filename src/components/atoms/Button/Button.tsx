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
  outline?: boolean;
  block?: boolean; // width: 100%
  borderRadius?: BorderRadius;
}

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
  ({
    className,
    fontSize = 'default',
    color = 'white',
    outline = false,
    block = false,
    borderRadius = 'small',
    children,
  }) => (
    <ButtonWrap
      className={className}
      fontSize={fontSize}
      color={color}
      outline={outline}
      block={block}
      borderRadius={borderRadius}
    >
      {children}
    </ButtonWrap>
  );

const ButtonWrap = styled.button<Required<ButtonProps>>`
  ${({ fontSize, color, outline, block, borderRadius }) => css`
    font-size: ${fontSize};
    outline: none;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: ${borders[borderRadius]};
    ${outline
      ? css`
          border: 1px solid ${colors[color]};
          background: none;
          color: ${colors[color]};
        `
      : css`
          background-color: ${colors[color]};
          border: none;
          color: ${color === 'white' || color === 'lightGray'
            ? colors.black
            : colors.white};
        `}
    ${block &&
    css`
      width: 100%;
    `};
  `}
`;
