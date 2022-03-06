import styled from 'styled-components';

export const ConfirmWrap = styled.div`
text-align: center;
width: 80vw;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
padding-top: 10px;
background: white;
border-radius: 10px;
overflow: hidden;
`;

export const ButtonWrap = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 10px;
border-top: 1px solid rgba(0, 0, 0, 0.15);
`;

export const DialogButton = styled.button`
width: 100%;
height: 50px;

padding: 0;

background: #fff;

border: 0px solid;

font-size: 16px;

text-align: center;

:active {
  background: #eee;
}

:focus {
  outline: none;
}

& + & {
  margin-left: -1px;

  border-left: 1px solid rgba(0, 0, 0, 0.15);
}
`;
