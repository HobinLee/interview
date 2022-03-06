import { VFC } from 'react';
import * as S from './styles';

interface PlayerProps {
  record: Blob | null;
}

export const RecordPlayer: VFC<PlayerProps> = ({ record }) => {
 return(<S.VideoWrap>
  {record && <S.RecordVideo width='' height='' url={URL.createObjectURL(record)} controls={true}/>}

</S.VideoWrap>);
}
