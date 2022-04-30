import If from '@src/components/atoms/If';
import { useDialog, useDidMount } from '@src/hooks';
import { FC, useEffect, useRef } from 'react';
import * as S from './styles'

export default ({ message }:{ message: string })  => {
  const ref = useRef(null);
  const TOAST_PORTAL_DURATION = 2000;

  const { isExist, isVisible, close } = useDialog(ref);

  useDidMount(()=>{
    const closeToast: NodeJS.Timeout = setTimeout(() => {
      close();
    }, TOAST_PORTAL_DURATION);

    return () => {
      clearTimeout(closeToast);
    };
  })

  return <If when={isExist}>
    <S.ToastWrap ref={ref} show={isVisible}>
      {message}
    </S.ToastWrap>
  </If>
};