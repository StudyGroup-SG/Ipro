import { HTTPRequestConfig, HTTPResponse, RequestHeaders } from './types';

abstract class HTTPClient {
  abstract setHeader(key: string, value: string): void;

  abstract getHeader(): RequestHeaders;

  abstract request<ResponseBodyT = unknown, RequestBodyT = unknown>(
    config: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>>;

  async get<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({
      ...config,
      url,
      method: 'GET',
    });
  }

  async delete<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({
      ...config,
      url,
      method: 'DELETE',
    });
  }

  async post<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({
      ...config,
      url,
      data,
      method: 'POST',
    });
  }

  async put<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    data: RequestBodyT,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, RequestBodyT>({
      ...config,
      url,
      data,
      method: 'PUT',
    });
  }

  async patch<ResponseBodyT = unknown, RequestBodyT = unknown>(
    url: string,
    data: Partial<RequestBodyT>,
    config?: HTTPRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    return this.request<ResponseBodyT, Partial<RequestBodyT>>({
      ...config,
      url,
      data,
      method: 'PATCH',
    });
  }
}

export default HTTPClient;
