import AuthApi from '.';

const mockedClient = {
  request: jest.fn(),
  get: jest.fn(),
  delete: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  patch: jest.fn(),
  getHeader: jest.fn(),
  setHeader: jest.fn(),
};
const mockedLoginRequestBody = { userId: 'id', password: 'password' };
const mockedAuthResponseBody = { access: 'access' };

describe('AuthApi.login() 메서드 테스트', () => {
  it('요청 성공 시 Response Body를 반환해야 합니다.', async () => {
    const authApi = new AuthApi(mockedClient, '/api/auth');

    mockedClient.post.mockResolvedValueOnce({
      data: mockedAuthResponseBody,
      status: 200,
    });

    const response = await authApi.login(mockedLoginRequestBody);
    expect(response).toBe(mockedAuthResponseBody);
  });

  it('요청 성공 시 header에 access token을 설정해야 합니다.', async () => {
    const authApi = new AuthApi(mockedClient, '/api/auth');

    mockedClient.post.mockResolvedValueOnce({
      data: mockedAuthResponseBody,
      status: 200,
    });

    let settedAccessToken = '';
    mockedClient.setHeader.mockImplementationOnce((_, token) => {
      settedAccessToken = token;
    });

    await authApi.login(mockedLoginRequestBody);

    expect(settedAccessToken).toBe(`Bearer ${mockedAuthResponseBody.access}`);
  });
});

describe('AuthApi.logout() 메서드 테스트', () => {
  it('요청 성공 시 header에 access token을 삭제해야 합니다.', async () => {
    const authApi = new AuthApi(mockedClient, '/api/auth');

    mockedClient.delete.mockResolvedValueOnce({
      data: {},
      status: 200,
    });

    let clearedAccessToken = '';
    mockedClient.setHeader.mockImplementationOnce((_, token) => {
      clearedAccessToken = token;
    });

    await authApi.logout();

    expect(clearedAccessToken).toBe('');
  });
});

describe('AuthApi.refresh() 메서드 테스트', () => {
  it('요청 성공 시 Response Body를 반환해야 합니다.', async () => {
    const authApi = new AuthApi(mockedClient, '/api/auth');

    mockedClient.get.mockResolvedValueOnce({
      data: mockedAuthResponseBody,
      status: 200,
    });

    const response = await authApi.refresh();
    expect(response).toBe(mockedAuthResponseBody);
  });

  it('요청 성공 시 header에 access token을 설정해야 합니다.', async () => {
    const authApi = new AuthApi(mockedClient, '/api/auth');

    mockedClient.get.mockResolvedValueOnce({
      data: mockedAuthResponseBody,
      status: 200,
    });

    let settedAccessToken = '';
    mockedClient.setHeader.mockImplementationOnce((_, token) => {
      settedAccessToken = token;
    });

    await authApi.refresh();

    expect(settedAccessToken).toBe(`Bearer ${mockedAuthResponseBody.access}`);
  });
});
