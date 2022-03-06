import { useDialog } from '@src/hooks';
import { FC, useEffect, useRef } from 'react';
import * as S from './styles'

export default ({ message }:{ message: string })  => {
  const ref = useRef(null);
  const TOAST_PORTAL_DURATION = 2000;

  const { close, destroy, isVisible } = useDialog(ref);

  useEffect(() => {
    const closeToast: NodeJS.Timeout = setTimeout(() => {
      close();
    }, TOAST_PORTAL_DURATION);

    return () => {
      clearTimeout(closeToast);
    };
  }, []);

  return destroy ? null : (
    <S.ToastWrap ref={ref} show={isVisible}>
      {message}
    </S.ToastWrap>
  );
};