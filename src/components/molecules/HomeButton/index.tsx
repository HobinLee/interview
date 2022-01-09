import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButton: FC = () => (
  <HeaderWrapper>
    <Link to="/">홈으로</Link>
  </HeaderWrapper>
);
export default HomeButton;

const HeaderWrapper = styled.a`
  display: flex;
  min-height: 40px;
  padding: 16px 16px 0 16px;
  text-align: right;
`;
