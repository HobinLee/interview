import { ROUTE_HOME } from '@src/routes';
import { colors } from '@src/styles/variables';
import { FC } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeButton: FC = () => (
  <LinkWrapper to={ROUTE_HOME}>
    <AiFillHome fill="white" />
  </LinkWrapper>
);
export default HomeButton;

const LinkWrapper = styled(Link)`
  transition: 0.5s;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1.5rem;
  left: 1.5rem;
  width: 50px;
  height: 50px;
  background-color: ${colors.blue};
  border-radius: 50%;
  font-size: 1.4rem;

  &:hover {
    opacity: 0.9;
  }
`;
