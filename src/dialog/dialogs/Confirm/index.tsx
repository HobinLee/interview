import { Backdrop, blockClick } from '@src/dialog';
import { useDialog } from '@src/hooks';
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import * as S from './styles'

interface ConfirmProps {
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Confirm: FC<ConfirmProps> = ({ message, onCancel, onConfirm }) => {
  const ref = useRef(null);
  const [confirm, setConfirm] = useState(false);

  const { close, destroy, isVisible } = useDialog(ref);

  useEffect(() => {
    if (destroy) {
      if (confirm) {
        onConfirm?.();
      } else {
        onCancel?.();
      }
    }
  }, [destroy]);

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

        <S.ButtonWrap>
          <S.DialogButton
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              closeWithStopPropagation(e);
              setConfirm(true);
            }}
          >
            확인
          </S.DialogButton>
          <S.DialogButton onClick={closeWithStopPropagation}>취소</S.DialogButton>
        </S.ButtonWrap>
      </S.ConfirmWrap>
    </Backdrop>
  );
};

export default Confirm;