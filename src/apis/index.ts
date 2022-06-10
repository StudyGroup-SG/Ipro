import AuthApi from './authApi';
import UserApi from './userApi';
import { createAxiosHTTPClient } from '@/utils/httpClient';

const getApiBaseURL = (): string => {
  return process.env.APP_API_URL ?? '/';
};

const baseURL = getApiBaseURL();
const client = createAxiosHTTPClient({ baseURL, withCredentials: true });

export const authApi = new AuthApi(client, '/api/auth');
export const userApi = new UserApi(client, '/api/users');
