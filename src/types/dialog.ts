export interface DialogProps {
    ref?: any;
    onOpen?: () => void;
    onClose?: (isConfirm?: boolean) => void;
  }