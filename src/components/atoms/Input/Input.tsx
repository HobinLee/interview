import { FontSize, colors, BorderRadius, borders } from '@src/styles/variables';
import { FC, InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  fontSize?: FontSize;
  borderRadius?: BorderRadius;
}

export const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  fontSize = 'default',
  borderRadius = 'small',
  onFocus,
  onBlur,
  onChange,
  placeholder,
  children,
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
    >
      {children}
    </InputWrap>
  );
};

const InputWrap = styled.input<Required<InputProps>>`
  cursor: text !important;
  ${({ fontSize, borderRadius }) => css`
    font-size: ${fontSize};
    outline: none;
    padding: 0.5em 1em;
    cursor: pointer;
    border-radius: ${borders[borderRadius]};
    border: 1px solid ${colors.gray};
    background-color: white;
    color: ${colors.black};
    width: 100%;
  `}
`;
