import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop, blockClick } from '@src/dialog';
import { useDialog } from '@src/hooks';
import * as S from '@src/dialog/dialogs/Confirm/styles';

interface AlertProps {
  message: string;
  onClose?: () => void;
}

const Alert: FC<AlertProps> = ({ message, onClose }) => {
  const ref = useRef(null);

  const { close, destroy, isVisible } = useDialog(ref, { onClose });

  const closeWithStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return destroy ? null : (
    <Backdrop
      ref={ref}
      isVisible={isVisible}
      onClick={closeWithStopPropagation}
    >
      <S.ConfirmWrap onClick={blockClick}>
        {message}
        <S.DialogButton onClick={closeWithStopPropagation}>확인</S.DialogButton>
      </S.ConfirmWrap>
    </Backdrop>
  );
};

export default Alert;
