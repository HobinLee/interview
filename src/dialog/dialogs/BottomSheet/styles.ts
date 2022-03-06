import styled from 'styled-components';

export const BottomSheetWrap = styled.div<{ isVisible: boolean }>`
position: fixed;
bottom: 0;
left: 0;

width: 100vw;
display: flex;
flex-direction: column;

background: white;

border-radius: 10px 10px 0 0;

overflow: hidden;

animation: 0.3s forwards
  ${({ isVisible }) => (isVisible ? 'openTranslateY' : 'closeTranslateY')};

@keyframes openTranslateY {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes closeTranslateY {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
}
`;
