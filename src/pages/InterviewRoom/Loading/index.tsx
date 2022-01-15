import { Loading, Typography } from '@src/components/atoms';
import { LoadingPageWrapper } from './style';

export const LoadingPage = () => (
  <LoadingPageWrapper>
    <Loading />
    <Typography color="white" margin="3rem 0 0 0" textAlign="center">
      데이터를 불러오는 중입니다. 잠시만 기다려주세요
    </Typography>
  </LoadingPageWrapper>
);
