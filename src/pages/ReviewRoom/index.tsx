import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Answer, answerState } from '../../store/question';
import { ReviewRoomWrapper } from './style';

const ReviewRoom: FC = () => {
  const answers: Answer[] = useRecoilValue<Answer[]>(answerState);

  const answerList = answers.map((answer, idx) => (
    <tr>
      <td>{answer.question}</td>
      <td>{answer.time}'</td>
    </tr>
  ));

  return (
    <ReviewRoomWrapper>
      <h3>Review</h3>
      <table className="review-table">
        <tr>
          <th>Questions</th>
          <th>Time</th>
        </tr>
        {answerList}
      </table>

      <Link to="/">again</Link>
    </ReviewRoomWrapper>
  );
};

export default ReviewRoom;
