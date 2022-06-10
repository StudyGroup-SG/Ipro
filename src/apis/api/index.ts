import { AuthResponseBody } from '@/types';
import { HTTPClient, HTTPResponse } from '@/utils/httpClient';
import { ApiRequestConfig } from './types';

abstract class Api {
  private readonly ACCESS_TOKEN_HEADER = 'Authorization';

  private apiUrl: string;

  protected client: HTTPClient;

  constructor(client: HTTPClient, apiUrl: string) {
    this.client = client;
    this.apiUrl = apiUrl;
  }

  protected setAccessToken(accessToken: string): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, `Bearer ${accessToken}`);
  }

  protected clearAccessToken(): void {
    this.client.setHeader(this.ACCESS_TOKEN_HEADER, '');
  }

  private async requestWithSilentRefresh<ResponseBodyT = unknown>(
    request: () => Promise<
      HTTPResponse<ResponseBodyT & Partial<AuthResponseBody>>
    >,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const response = await request();

    const { access = '', requestAgain = false } = response.data;

    if (access) this.setAccessToken(access);
    if (!requestAgain) return response;

    return request();
  }

  async get<ResponseBodyT = unknown, RequestBodyT = unknown>(
    config?: ApiRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () =>
      this.client.get<ResponseBodyT, RequestBodyT>(url, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  async delete<ResponseBodyT = unknown, RequestBodyT = unknown>(
    config?: ApiRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () =>
      this.client.delete<ResponseBodyT, RequestBodyT>(url, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  async post<ResponseBodyT = unknown, RequestBodyT = unknown>(
    data: RequestBodyT,
    config?: ApiRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () =>
      this.client.post<ResponseBodyT, RequestBodyT>(url, data, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  async put<ResponseBodyT = unknown, RequestBodyT = unknown>(
    data: RequestBodyT,
    config?: ApiRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () =>
      this.client.put<ResponseBodyT, RequestBodyT>(url, data, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }

  async patch<ResponseBodyT = unknown, RequestBodyT = unknown>(
    data: Partial<RequestBodyT>,
    config?: ApiRequestConfig<RequestBodyT>,
  ): Promise<HTTPResponse<ResponseBodyT>> {
    const url = `${this.apiUrl}${config?.additionalUri ?? ''}`;

    const request = () =>
      this.client.patch<ResponseBodyT, RequestBodyT>(url, data, config);

    return this.requestWithSilentRefresh<ResponseBodyT>(request);
  }
}

export * from './types';
export default Api;
