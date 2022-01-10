import { flexCenter } from '@src/styles/mixins';
import {
  FontSize,
  Color,
  colors,
  BorderRadius,
  borders,
  sizes,
} from '@src/styles/variables';
import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  fontSize?: FontSize;
  color?: Color;
  isFilled?: boolean;
  block?: boolean; // width: 100%
  borderRadius?: BorderRadius;
  padding?: string;
  margin?: string;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  fontSize = 'default',
  color = 'gray',
  isFilled,
  block = false,
  borderRadius = 'small',
  children,
  onClick,
  disabled,
  padding,
  margin,
}) => (
  <ButtonWrap
    onClick={onClick}
    className={className}
    fontSize={fontSize}
    color={color}
    isFilled={isFilled ?? false}
    block={block}
    borderRadius={borderRadius}
    disabled={disabled}
    padding={padding ?? '0.5rem 1rem'}
    margin={margin ?? ''}
  >
    {children}
  </ButtonWrap>
);

export default Button;

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
  ${({
    fontSize,
    color,
    isFilled,
    block,
    borderRadius,
    padding,
    margin,
  }) => css`
    transition: 0.5s;

    padding: ${padding};
    margin: ${margin};

    box-sizing: border-box;

    border-radius: ${borders[borderRadius]};
    outline: none;
    font-size: ${sizes.font[fontSize]};

    ${flexCenter}

    cursor: pointer;
    ${isFilled ? strokeStyle(color) : outlineStyle(color)}
    ${block &&
    css`
      width: 100%;
    `};

    &:enabled {
      &:hover {
        ${isFilled
          ? css`
              opacity: 0.8;
            `
          : strokeStyle(color)}
        opacity: 0.8;
      }
    }

    &:disabled {
      opacity: 0.3;
      cursor: default;
    }
  `}
`;
