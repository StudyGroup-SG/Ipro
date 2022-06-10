import {
  useSetConfirmModalState,
  ConfirmModalStateType,
} from '@/atoms/confirmModalState';

const useConfirmModal = (): readonly [
  open: (next?: Partial<ConfirmModalStateType>) => void,
  close: (next?: Partial<ConfirmModalStateType>) => void,
  setConfirmModal: (next?: Partial<ConfirmModalStateType>) => void,
] => {
  const setConfirmModalState = useSetConfirmModalState();

  const setConfirmModal = (next?: Partial<ConfirmModalStateType>) =>
    setConfirmModalState((prev) => ({ ...prev, ...next }));

  const open = (next?: Partial<ConfirmModalStateType>) =>
    setConfirmModalState((prev) => ({ ...prev, ...next, isOpen: true }));

  const close = (next?: Partial<ConfirmModalStateType>) =>
    setConfirmModalState((prev) => ({ ...prev, next, isOpen: false }));

  return [open, close, setConfirmModal];
};

export default useConfirmModal;
