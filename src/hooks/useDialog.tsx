import { DialogProps } from '@src/types/dialog';
import { useEffect, useState } from 'react';
import useBoolean from './useBoolean';
import useDidMount from './useDidMount';

export default (ref: any, dialogProps?: DialogProps) => {
  const [isVisible, show, hide] = useBoolean(true);
  const [isExist, destory] = useBoolean(true);

  const close = (withAnimation: boolean = true) => {
    if (withAnimation) {
      const currentDialog: HTMLElement = ref.current!;
      hide();

      currentDialog.onanimationend = (e: AnimationEvent) => {
        dialogProps?.onClose?.();
        currentDialog.onanimationend = null;
        destory();
      };
    } else {
      dialogProps?.onClose?.();
      destory();
    }
  };

  useDidMount(() => {
    dialogProps?.onOpen?.();
    return () => {
      dialogProps?.onClose?.();
    };
  })

  return { close, isExist, isVisible };
};
