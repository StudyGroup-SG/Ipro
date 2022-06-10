import { AxiosInstance, AxiosRequestConfig } from 'axios';

import HTTPClient from './httpClient';
import HTTPError from './httpError';
import { HTTPRequestConfig, HTTPResponse, RequestHeaders } from './types';

class AxiosHTTPClient extends HTTPClient {
  private readonly client: AxiosInstance;

  private defaultRequestConfig: AxiosRequestConfig;

  constructor(client: AxiosInstance, defaultConfig?: AxiosRequestConfig) {
    super();
    this.client = client;
    this.defaultRequestConfig = defaultConfig;
  }

  async request<ResponseBodyT = unknown, RequestBodyT = unknown>(
    config: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    try {
      const requestConfig = { ...this.defaultRequestConfig, ...config };
      const response = await this.client(requestConfig);

      const { data, status } = response;

      return { data, status };
    } catch (e) {
      const httpErrorResponse: HTTPResponse<ResponseBodyT> = {
        data: e.response?.data,
        status: e.response?.status,
      };

      throw new HTTPError({
        message: e.message,
        response: e.response ? httpErrorResponse : undefined,
      });
    }
  }

  setHeader(key: string, value: string): void {
    this.defaultRequestConfig = {
      ...this.defaultRequestConfig,
      headers: {
        ...this.defaultRequestConfig.headers,
        [key]: value,
      },
    };
  }

  getHeader(): RequestHeaders {
    return this.defaultRequestConfig.headers;
  }
}

export default AxiosHTTPClient;
