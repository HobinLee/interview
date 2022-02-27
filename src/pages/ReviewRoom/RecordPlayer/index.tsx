import { VFC } from 'react';
import * as S from './styles';

interface PlayerProps {
  record: Blob | null;
}

export const RecordPlayer: VFC<PlayerProps> = ({ record }) => (
  <S.VideoWrap>
    {record && <S.RecordVideo src={URL.createObjectURL(record)} autoPlay />}
  </S.VideoWrap>
);
