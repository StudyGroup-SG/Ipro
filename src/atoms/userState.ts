import {
  SetterOrUpdater,
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

import { User } from '@/types';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export const useUserState = (): [User, SetterOrUpdater<User>] => {
  return useRecoilState(userState);
};

export const useUserStateValue = (): User => {
  return useRecoilValue(userState);
};

export const useSetUserState = (): SetterOrUpdater<User> => {
  return useSetRecoilState(userState);
};
