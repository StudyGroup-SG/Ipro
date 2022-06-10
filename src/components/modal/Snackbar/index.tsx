import React, { FC, useEffect, useState } from 'react';

import {
  snackbarWrapperStyle,
  snackbarHideStyle,
  snackbarShowStyle,
} from './style';

export type SnackbarProps = {
  isOpen?: boolean;
  message?: string;
  color?: string;
  backgroundColor?: string;
};

const Snackbar: FC<SnackbarProps> & {
  defaultProps: Partial<SnackbarProps>;
} = ({ isOpen, message, color, backgroundColor }) => {
  const [isShowing, setIsShowing] = useState(false);
  const visibleStyle =
    isOpen && isShowing ? snackbarShowStyle : snackbarHideStyle;

  useEffect(() => isOpen && setIsShowing(true), [isOpen]);
  const hideMessageAfterFadeOutAnimation = () => !isOpen && setIsShowing(false);

  return (
    <div
      css={[snackbarWrapperStyle, visibleStyle, { color, backgroundColor }]}
      onTransitionEnd={hideMessageAfterFadeOutAnimation}
    >
      {isShowing ? message : ''}
    </div>
  );
};

Snackbar.defaultProps = {
  isOpen: false,
  message: '',
  color: '#fff',
  backgroundColor: '#000',
};

export default Snackbar;
