import { useEffect, useState } from 'react';

import { authApi } from '@/apis';
import { useUserStateValue } from '@/atoms/userState';

const useAutoLogin = (): { isLoading: boolean; isLoggedIn: boolean } => {
  const userState = useUserStateValue();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const autoLogin = async () => {
    try {
      setIsLoading(true);

      await authApi.refresh();

      // @TODO refresh API 성공 시, 사용자 정보 가져오는 API를 호출하여 사용자 상태로 저장

      setIsLoggedIn(true);
    } catch (e) {
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    autoLogin();
  }, [userState]);

  return { isLoading, isLoggedIn };
};

export default useAutoLogin;
