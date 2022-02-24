import { useState, VFC } from 'react';
import { Typography } from '@src/components/atoms';
import { ROUTE_HOME, ROUTE_REVIEW } from '@src/routes';
import { FooterButton } from './FooterButton';
import { AiOutlineFileSearch, AiOutlineRight } from 'react-icons/ai';
import { MdCallEnd } from 'react-icons/md';
import * as S from './styles';
import { usePage } from '@src/hooks';

interface FooterProps {
  standby: boolean;
  handelNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const InterviewRoomFooter: VFC<FooterProps> = ({
  standby,
  handelNextQuestion,
  isLastQuestion,
}) => {
  const [moveToHome, moveToReview] = usePage([ROUTE_HOME, ROUTE_REVIEW]);
  const [startTime] = useState(new Date().toString().slice(16, 25));

  return (
    <S.InterviewRoomFooter>
      <S.StartTimeWrap>
        <Typography
          color="white"
          margin="0 0 0.5rem 0"
          fontWeight="bold"
          fontSize="smaller"
        >
          시작시간
        </Typography>
        <Typography color="white" fontSize="large">
          {startTime}
        </Typography>
      </S.StartTimeWrap>

      <FooterButton
        color="blue"
        disabled={!isLastQuestion && standby}
        onClick={!isLastQuestion ? handelNextQuestion : moveToReview}
      >
        {isLastQuestion ? (
          <AiOutlineFileSearch />
        ) : (
          <AiOutlineRight stroke="#fff" />
        )}
      </FooterButton>
      <FooterButton color="red" onClick={moveToHome}>
        <MdCallEnd />
      </FooterButton>
    </S.InterviewRoomFooter>
  );
};
