import { FC, MouseEventHandler, ReactElement, useRef } from 'react';
import { Backdrop, blockClick } from '@src/dialog';
import { useDialog } from '@src/hooks';
import { DialogProps } from '@src/types/dialog';
import * as S from './styles';

interface BottomSheetProps extends DialogProps {
  title?: string;
  children: FC<{ close: (withAnimation?: boolean) => void }>;
}

const BottomSheet: FC<BottomSheetProps> = ({
  children,
  ...dialogProps
}) => {
  const ref = useRef(null);
  const { isExist, isVisible, close } = useDialog(ref, dialogProps);

  const closeAndStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return isExist ? null : (
    <Backdrop ref={ref} isVisible={isVisible} onClick={closeAndStopPropagation}>
      <S.BottomSheetWrap isVisible={isVisible} onClick={blockClick}>
        {children({ close })}
      </S.BottomSheetWrap>
    </Backdrop>
  );
};

export default BottomSheet;
