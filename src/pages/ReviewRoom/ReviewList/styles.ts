import { Button } from '@src/components/atoms';
import { media } from '@src/styles/mixins';
import { colors, sizes } from '@src/styles/variables';
import styled from 'styled-components';

export const ReviewList = styled.ul`
  width: 100%;
  min-height: 300px;
  min-width: 100%;
  height: 70vh;
  overflow: scroll;

  ${media('pc')} {
    max-height: calc(100vh - 100vw - 40px);
  }
`;

export const QuestionWrap = styled.div`
  width: 300px;
  border-right: 1px solid ${colors.gray};
  margin-right: 1rem;
  padding-right: 1rem;
  ${media('mobile')} {
    max-width: 50vw;
  }
`;

export const ReviewListElement = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  width: 100%;
  word-break: keep-all;
  flex-wrap: wrap;
`;

export const PlayButton = styled(Button)`
  ${media('mobile')} {
    font-size: ${sizes.font.small};
    padding: 0.2rem 0.4rem;
  }
`