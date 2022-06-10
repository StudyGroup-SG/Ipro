export type LoginRequestBody = {
  userId: string;
  password: string;
};

export type AuthResponseBody = {
  access: string;
  requestAgain?: boolean;
};
