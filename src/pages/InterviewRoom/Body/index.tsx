import { VFC } from 'react';
import Profile from './Profile';

export const Body: VFC = () => (
  <div className="body">
    <Profile type="interviewer" />
    <Profile type="interviewer" />
    <Profile type="interviewee" />
  </div>
);
