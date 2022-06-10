import axios, { AxiosRequestConfig } from 'axios';

import AxiosHTTPClient from './axiosHTTPClient';

export * from './types';
export { default as HTTPClient } from './httpClient';

export const createAxiosHTTPClient = (
  defaultConfig: AxiosRequestConfig,
): AxiosHTTPClient => {
  const client = axios.create();
  const axiosHTTPClient = new AxiosHTTPClient(client, defaultConfig);
  return axiosHTTPClient;
};
