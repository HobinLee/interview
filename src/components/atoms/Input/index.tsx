import {
  FontSize,
  colors,
  BorderRadius,
  borders,
  sizes,
} from '@src/styles/variables';
import { InputHTMLAttributes, VFC } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  fontSize?: FontSize;
  borderRadius?: BorderRadius;
}

const Input: VFC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  fontSize = 'default',
  borderRadius = 'small',
  onFocus,
  onBlur,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <InputWrap
      placeholder={placeholder}
      className={className}
      fontSize={fontSize}
      borderRadius={borderRadius}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;

const InputWrap = styled.input<Required<InputProps>>`
  cursor: text !important;
  ${({ fontSize, borderRadius }) => css`
    box-sizing: border-box;
    font-size: ${sizes.font[fontSize]};
    outline: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: ${borders[borderRadius]};
    border: 1px solid ${colors.gray};
    background-color: white;
    color: ${colors.black};
    width: 100%;
  `}
`;
