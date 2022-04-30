import { useDialog, useDidMount } from '@src/hooks';
import { DialogProps } from '@src/types/dialog';
import { FC, MouseEventHandler, ReactElement, ReactEventHandler, useRef } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { cloneElement } from 'react';
import { Toast } from './dialogs';

export const blockClick: ReactEventHandler = e => e.stopPropagation();

export const Dialog: FC<DialogProps> = ({ children, ...dialogProps }) => {
  const ref = useRef(null);
  const { isExist, isVisible, close } = useDialog(ref, dialogProps);

  const closeAndStopPropagation: MouseEventHandler = e => {
    close();
    e.stopPropagation();
  };

  return isExist ? (
    <Backdrop ref={ref} isVisible={isVisible} onClick={closeAndStopPropagation}>
      <DialogWrap onClick={blockClick}>{children}</DialogWrap>
    </Backdrop>
  ) : null;
};

export const Backdrop = styled.div<{ isVisible: boolean }>`
width: 100vw;
height: 100vh;

background: rgba(0, 0, 0, 0.2);

display: flex;
justify-content: center;
align-items: center;

position: fixed;
top: 0;
left: 0;

animation: 0.3s linear
  ${({ isVisible }) => (!isVisible ? 'fadeOut' : 'fadeIn')};
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;

const DialogWrap = styled.div`
width: auto;
height: auto;
background: white;
padding: 1rem;
border-radius: 0.5rem;
`;

interface DialogEvent extends Event {
  detail: {
    dialog: ReactElement;
  };
}

const EVENT_OPEN_DIALOG = 'openDialog';

export const Dialogs: FC = () => {
  const dialogList = useRef<ReactElement[]>([]).current;
  const [, setDialogNum] = useState(0);

  useDidMount(() => {

    window.addEventListener(EVENT_OPEN_DIALOG, addDialog);
    return () => window.removeEventListener(EVENT_OPEN_DIALOG, addDialog);

    function addDialog(e: Event) {
      dialogList.push(
        cloneElement((e as DialogEvent).detail.dialog, {
          key: dialogList.length,
        }),
      );

      setDialogNum(dialogList.length);
    }
  })

  return <>{dialogList}</>;
};

export const openDialog = (dialog: ReactElement) => {
  const dialogEvent = new CustomEvent('openDialog', {
    detail: {
      dialog: dialog,
    },
  });

  window.dispatchEvent(dialogEvent);
};

export const closeAll = () => {
  const dialogEvent = new CustomEvent('closeAllDialogs');

  window.dispatchEvent(dialogEvent);
};

export const toast = (message: string): void => {
  openDialog(<Toast message={message} />);
};


// export const confirm = async (message: string): Promise<boolean> => {
//   return new Promise(resolved => {
//     openDialog(
//       <Confirm
//         message={message}
//         onConfirm={async () => {
//           resolved(true);
//         }}
//         onCancel={async () => {
//           resolved(false);
//         }}
//       />,
//     );
//   });
// };

// export const alert = async (message: string): Promise<void> => {
//   return new Promise(resolved => {
//     openDialog(
//       <Alert
//         message={message}
//         onClose={async () => {
//           resolved();
//         }}
//       />,
//     );
//   });
// };

//confirm: (message: string, props?: DialogStoreConfirmProps & DialogOptions) => Promise<boolean>;
