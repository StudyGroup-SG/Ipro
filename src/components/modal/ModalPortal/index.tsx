import React, { FC } from 'react';
import Portal from '@/components/common/Portal';

const ModalPortal: FC = ({ children }) => {
  return <Portal elementId="modal-root">{children}</Portal>;
};

export default ModalPortal;
