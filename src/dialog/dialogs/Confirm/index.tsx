import If from '@src/components/atoms/If';
import { Backdrop, blockClick } from '@src/dialog';
import { useBoolean, useDialog } from '@src/hooks';
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './styles'

interface ConfirmProps {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Confirm: FC<ConfirmProps> = ({ message, onCancel, onConfirm }) => {
  const ref = useRef(null);
  const [isConfirm, confirm] = useBoolean(false);
  const { isExist, isVisible, close } = useDialog(ref);

  useEffect(() => {
    if (!isExist) {
      if (isConfirm) {
        onConfirm?.();
      } else {
        onCancel?.();
      }
    }
  }, [isExist]);

  const closeWithStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return <If when={isExist}>
    <Backdrop
      ref={ref}
      isVisible={isVisible}
      onClick={closeWithStopPropagation}
    >
      <S.ConfirmWrap onClick={blockClick}>
        {message}

        <S.ButtonWrap>
          <S.DialogButton
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              closeWithStopPropagation(e);
              confirm();
            }}
          >
            확인
          </S.DialogButton>
          <S.DialogButton onClick={closeWithStopPropagation}>취소</S.DialogButton>
        </S.ButtonWrap>
      </S.ConfirmWrap>
    </Backdrop>
  </If>
};

export default Confirm;