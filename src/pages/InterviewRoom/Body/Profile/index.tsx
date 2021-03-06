import { Camera } from '@src/components/molecules';
import { FC } from 'react';
import * as S from './style';

type ProfileProps = {
  type: 'interviewer' | 'interviewee';
};

const Profile: FC<ProfileProps> = ({ type }) => {
  if (type !== 'interviewee') {
    return <S.ProfileWrap />;
  }

  return (
    <S.ProfileWrap>
      <Camera />
    </S.ProfileWrap>
  );
};

export default Profile;
