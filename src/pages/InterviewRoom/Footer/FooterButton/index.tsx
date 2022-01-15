import { ComponentPropsWithoutRef, FC } from 'react';

import { Button } from '@src/components/atoms';

export const FooterButton: FC<
  Pick<
    ComponentPropsWithoutRef<typeof Button>,
    'color' | 'disabled' | 'onClick'
  >
> = ({ children, ...props }) => (
  <Button
    {...props}
    isFilled
    padding="0.5rem 1.4rem"
    fontSize="large"
    borderRadius="larger"
    margin="0 0.5rem"
  >
    {children}
  </Button>
);
