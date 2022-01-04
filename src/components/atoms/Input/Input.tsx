import { FontSize, Color, colors } from '@src/styles/variables';
import { ButtonHTMLAttributes, FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  fontSize: FontSize;
  color: Color;
  outline?: boolean;
  block?: boolean; // width: 100%
}

export const Button: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  fontSize,
  color,
  placeholder,
  outline = false,
  block = false,
  children,
}) => (
  <InputWrap
    placeholder={placeholder}
    className={className}
    fontSize={fontSize}
    color={color}
    outline={outline}
    block={block}
  >
    {children}
  </InputWrap>
);

const InputWrap = styled.button<InputProps>`
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
  `}
`;
