import React, { FC, useCallback } from 'react';
import { useConfirmModalState } from '@/atoms/confirmModalState';
import ModalPortal from '@/components/modal/ModalPortal';
import ConfirmModal from '@/components/modal/ConfirmModal';

const ConfirmModalRoot: FC = () => {
  const [confirmModalState, setConfirmModalState] = useConfirmModalState();
  const {
    isOpen,
    message,
    cancelContent,
    acceptContent,
    cancelHandler,
    acceptHandler,
  } = confirmModalState;

  const closeModal = useCallback(() => {
    setConfirmModalState((prevState) => ({ ...prevState, isOpen: false }));
  }, []);

  return (
    <ModalPortal>
      <ConfirmModal
        isOpen={isOpen}
        message={message}
        cancelContent={cancelContent}
        acceptContent={acceptContent}
        cancelHandler={cancelHandler}
        acceptHandler={acceptHandler}
        closeModal={closeModal}
      />
    </ModalPortal>
  );
};

export default ConfirmModalRoot;
