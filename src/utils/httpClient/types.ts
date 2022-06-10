export interface HTTPResponse<ResponseBodyT = unknown> {
  data: ResponseBodyT;
  status: number;
}

export type HTTPMethod = 'GET' | 'DELETE' | 'POST' | 'PUT' | 'PATCH';

export type RequestHeaders = Record<string, string>;

export interface HTTPRequestConfig<RequestBodyT = unknown> {
  url?: string;
  baseURL?: string;
  method?: HTTPMethod;
  data?: RequestBodyT;
  headers?: RequestHeaders;
}
