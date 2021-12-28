import styled from "styled-components";

export const StartButtonWrapper = styled.div `
width: 100vw;
height: auto;
position: absolute;
top: calc(50%-2rem);
left: 0;
background: rgba(0,0,0,0.4);
color: white;
text-align: center;
padding: 3rem 0;
z-index: 100;

> button {
  background: #1a73e8;
  color: white;
  padding: 0.5rem 3rem;
  margin: 0;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  font-size: 3rem;
  cursor: pointer;
}
`