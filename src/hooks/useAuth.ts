import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { authApi } from '@/apis';
import { LoginRequestBody } from '@/types';
import { useSetUserState } from '@/atoms/userState';
import { NETWORK_ERROR, loginError, UNEXPECTED_ERROR } from '@/constants/error';
import Uri from '@/constants/uri';

const useAuth = (): {
  login: ({ userId, password }: LoginRequestBody) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  error: string;
} => {
  const setUserState = useSetUserState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const login = async ({ userId, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await authApi.login({ userId, password });

      // @TODO 로그인 성공 시 사용자 정보 가져오는 API 호출 후 상태로 저장

      history.replace(Uri.home);
    } catch (e) {
      if (e.response) {
        if (loginError[e.response.status]) {
          setError(loginError[e.response.status]);
        } else {
          setError(UNEXPECTED_ERROR);
        }
      } else {
        setError(NETWORK_ERROR);
      }
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUserState(null);
    authApi.logout().catch(() => {
      /* 로그아웃의 경우, 별도의 에러 처리를 하지 않음 */
    });
  };

  return {
    login,
    logout,
    isLoading,
    error,
  };
};

export default useAuth;
