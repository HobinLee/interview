import { FC } from 'react';
import * as S from './style';

type ProfileProps = {
  type: 'interviewer' | 'interviewee';
};

const Profile: FC<ProfileProps> = ({ type }) => {
  return <S.ProfileWrap></S.ProfileWrap>;
};

export default Profile;
