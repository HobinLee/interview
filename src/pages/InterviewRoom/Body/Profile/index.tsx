import Camera from '@src/components/atoms/Camera';
import { FC } from 'react';
import * as S from './style';

type ProfileProps = {
  type: 'interviewer' | 'interviewee';
};

const Profile: FC<ProfileProps> = ({ type }) => {
  return <S.ProfileWrap>{type === 'interviewee' && <Camera />}</S.ProfileWrap>;
};

export default Profile;
