import { FontSize, Color, colors } from '@src/styles/variables';
import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  fontSize: FontSize;
  color: Color;
  outline?: boolean;
  block?: boolean; // width: 100%
}

export const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
  ({
    className,
    fontSize,
    color,
    outline = false,
    block = false,
    children,
  }) => (
    <ButtonWrap
      className={className}
      fontSize={fontSize}
      color={color}
      outline={outline}
      block={block}
    >
      {children}
    </ButtonWrap>
  );

const ButtonWrap = styled.button<ButtonProps>`
  ${({ fontSize, color, outline, block }) => css`
    font-size: ${fontSize};
    outline: none;
    padding: 0.5em 1em;
    ${outline
      ? css`
          border: 1px solid ${colors[color]};
          background: white;
          color: ${colors[color]};
        `
      : css`
          background-color: ${colors[color]};
          border: none;
          color: ${color === 'white' || color === 'lightGray'
            ? 'black'
            : 'white'};
        `}
    ${block &&
    css`
      width: 100%;
    `}
  `}
`;
