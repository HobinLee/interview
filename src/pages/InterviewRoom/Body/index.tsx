import { VFC } from 'react';
import Profile from './Profile';

import * as S from './style';

export const InterviewRoomBody: VFC = () => (
  <S.InterviewRoomBody>
    <Profile type="interviewer" />
    <Profile type="interviewer" />
    <Profile type="interviewee" />
  </S.InterviewRoomBody>
);
