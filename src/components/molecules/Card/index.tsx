import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  title: ReactNode;
}
const Card: FC<CardProps> = ({ title, children }) => (
  <CardWrapper>
    <div className="title">{title}</div>
    <div className="content">{children}</div>
  </CardWrapper>
);

export default Card;

const CardWrapper = styled.section`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: flex-start;
  padding: 1rem;
  border-radius: 1rem;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 3px;
  .title {
    margin-bottom: 1rem;
  }
  .content {
    padding: 1rem;
  }
`;
