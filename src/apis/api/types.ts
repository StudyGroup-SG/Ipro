import { HTTPRequestConfig } from '@/utils/httpClient';

export interface ApiRequestConfig<RequestBodyT = unknown>
  extends Omit<HTTPRequestConfig<RequestBodyT>, 'url'> {
  additionalUri?: string;
}
