import {
  SetterOrUpdater,
  atom,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from 'recoil';
import { ConfirmModalProps } from '@/components/modal/ConfirmModal';

export type ConfirmModalStateType = Required<
  Omit<ConfirmModalProps, 'closeModal'>
>;

const initialState: ConfirmModalStateType = {
  isOpen: false,
  message: '',
  cancelContent: 'cancel',
  acceptContent: 'accept',
  cancelHandler: null,
  acceptHandler: null,
};

const confirmModalState = atom({
  key: 'confirmModalState',
  default: initialState,
});

export const useConfirmModalState = (): [
  ConfirmModalStateType,
  SetterOrUpdater<ConfirmModalStateType>,
] => {
  return useRecoilState(confirmModalState);
};

export const useConfirmModalStateValue = (): ConfirmModalStateType => {
  return useRecoilValue(confirmModalState);
};

export const useSetConfirmModalState =
  (): SetterOrUpdater<ConfirmModalStateType> => {
    return useSetRecoilState(confirmModalState);
  };
