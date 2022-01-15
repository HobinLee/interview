import { FC } from 'react';
import { ProfileWrapper } from './style';

type ProfileProps = {
  type: 'interviewer' | 'interviewee';
};

const Profile: FC<ProfileProps> = ({ type }) => {
  return <ProfileWrapper></ProfileWrapper>;
};

export default Profile;
