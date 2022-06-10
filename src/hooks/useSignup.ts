import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { userApi } from '@/apis';
import { LoginRequestBody } from '@/types';
import {
  NETWORK_ERROR,
  signupError,
  UNEXPECTED_ERROR,
} from '@/constants/error';
import Uri from '@/constants/uri';

const useSignup = (): {
  signup: ({ userId, password }: LoginRequestBody) => Promise<void>;
  isLoading: boolean;
  error: string;
} => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();

  const signup = async ({ userId, password }: LoginRequestBody) => {
    try {
      setIsLoading(true);

      await userApi.signup({ userId, password });

      // @TODO 회원가입 성공 시 로그인 페이지로 이동
      history.replace(Uri.home);
    } catch (e) {
      if (e.response) {
        if (signupError[e.response.status]) {
          setError(signupError[e.response.status]);
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

  return {
    signup,
    isLoading,
    error,
  };
};

export default useSignup;
