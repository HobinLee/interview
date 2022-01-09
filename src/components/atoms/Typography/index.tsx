import {
  FontSize,
  Color,
  FontWeight,
  TextAlign,
  colors,
  sizes,
} from '@src/styles/variables';
import { FC } from 'react';
import styled, { css } from 'styled-components';

interface TypographyProps {
  width?: string | 'auto';
  heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: Color;
  textAlign?: TextAlign;
  lineHeight?: '';
  wordBreak?: '';
  ellipsis?: boolean;
  className?: string;
}

const Typography: FC<TypographyProps> = ({
  className,
  heading,
  children,
  ...props
}) => {
  return (
    <InputWrap as={heading ?? 'div'} className={className} {...props}>
      {children}
    </InputWrap>
  );
};

export default Typography;

const InputWrap = styled.div<Omit<TypographyProps, 'heading' | 'className'>>`
  ${({
    width,
    color = 'black',
    lineHeight = '1em',
    wordBreak = '',
    fontSize = 'default',
    fontWeight = 'default',
    textAlign = 'left',
    ellipsis = false,
  }) => css`
    width: ${width ? `${width}px` : 'auto'};
    color: ${colors[color]};
    font-size: ${sizes.font[fontSize]};
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    word-break: ${wordBreak};
    text-align: ${textAlign};
    ${ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  `}
`;
