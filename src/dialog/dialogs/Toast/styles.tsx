import styled from 'styled-components';

export const ToastWrap = styled.div<{ show: boolean }>`
position: fixed;
bottom: 100px;
left: 50%;
transform: translateX(-50%);

width: auto;
z-index: 100;
font-size: 0.8rem;

animation: 0.5s forwards ${({ show }) => (show ? 'fadeIn' : 'fadeOut')};

max-width: 270px;

padding: 0.5rem 1rem;

display: inline-block;

margin: 0 auto;
padding: 12px 18px 11px 18px;

background-color: rgba(34, 34, 34, 0.8);

border-radius: 10px;

color: white;

text-align: center;

opacity: 0;

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`;
