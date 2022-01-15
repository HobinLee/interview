import { colors } from '@src/styles/variables';
import { VFC } from 'react';
import styled, { css } from 'styled-components';

const spinnerSize = {
  small: 20,
  default: 30,
  large: 40,
};

interface LoadingProps {
  className?: string;
  color?: 'white' | 'gray';
  margin?: string;
  size?: keyof typeof spinnerSize;
  padding?: string;
}

const Loading: VFC<LoadingProps> = ({ className, ...props }) => (
  <LoadingCube className={className} {...props}>
    <div className="cube1"></div>
    <div className="cube2"></div>
  </LoadingCube>
);

export default Loading;

const LoadingCube = styled.div<LoadingProps>`
  ${({ margin = '0', padding = '0', size = 'default', color = 'white' }) => css`
    position: relative;

    width: ${spinnerSize[size] * 2}px;
    height: ${spinnerSize[size] * 2}px;

    padding: ${padding};
    margin: ${margin};

    .cube1,
    .cube2 {
      position: absolute;
      top: 0;
      left: 0;

      width: ${spinnerSize[size] * 0.375}px;
      height: ${spinnerSize[size] * 0.375}px;

      background-color: ${color === 'white' ? colors.white : colors.black};
      opacity: 0.7;
      -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
      animation: sk-cubemove 1.8s infinite ease-in-out;
    }

    .cube2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }

    @-webkit-keyframes sk-cubemove {
      25% {
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
      }
      50% {
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
      }
      75% {
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
          scale(0.5);
      }
      100% {
        -webkit-transform: rotate(-360deg);
      }
    }

    @keyframes sk-cubemove {
      25% {
        transform: translateX(42px) rotate(-90deg) scale(0.5);
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
      }
      50% {
        transform: translateX(42px) translateY(42px) rotate(-179deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
      }
      50.1% {
        transform: translateX(42px) translateY(42px) rotate(-180deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
      }
      75% {
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg)
          scale(0.5);
      }
      100% {
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
      }
    }
  `}
`;
