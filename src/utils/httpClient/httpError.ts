import { HTTPResponse } from './types';

interface HTTPErrorProps<ResponseBodyT = unknown> {
  message: string;
  response: HTTPResponse<ResponseBodyT>;
}

class HTTPError<ResponseBodyT = unknown> extends Error {
  response: HTTPResponse<ResponseBodyT>;

  stacks?: string;

  constructor({ message, response }: HTTPErrorProps<ResponseBodyT>) {
    super(message);

    this.response = response;

    Error.captureStackTrace(this, this.constructor);

    this.stacks = this.stack;
  }
}

export default HTTPError;
