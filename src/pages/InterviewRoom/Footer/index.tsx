import { useState, VFC } from 'react';
import { Typography } from '@src/components/atoms';
import { useNavigate } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_REVIEW } from '@src/routes';
import { FooterButton } from './FooterButton';
import { AiOutlineFileSearch, AiOutlineRight } from 'react-icons/ai';
import { MdCallEnd } from 'react-icons/md';

interface FooterProps {
  standby: boolean;
  handelNextQuestion: () => void;
  showNextButton: boolean;
}

export const Footer: VFC<FooterProps> = ({
  standby,
  handelNextQuestion,
  showNextButton,
}) => {
  const navigate = useNavigate();
  const [startTime] = useState(new Date().toString().slice(16, 25));

  const moveToHome = () => {
    navigate(ROUTE_HOME);
  };
  const moveToReview = () => {
    navigate(ROUTE_REVIEW);
  };

  return (
    <div className="footer">
      <span className="start-time">
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
      </span>

      <FooterButton
        color="blue"
        disabled={showNextButton && standby}
        onClick={showNextButton ? handelNextQuestion : moveToReview}
      >
        {showNextButton ? (
          <AiOutlineRight stroke="#fff" />
        ) : (
          <AiOutlineFileSearch />
        )}
      </FooterButton>
      <FooterButton color="red" onClick={moveToHome}>
        <MdCallEnd />
      </FooterButton>
    </div>
  );
};
