import { Loading, Typography } from '@src/components/atoms';
import * as S from './style';

export const LoadingIndicator = () => (
  <S.LoadingIndicatorWrap>
    <Loading />
    <Typography color="white" margin="3rem 0 0 0" textAlign="center">
      데이터를 불러오는 중입니다. 잠시만 기다려주세요
    </Typography>
  </S.LoadingIndicatorWrap>
);
