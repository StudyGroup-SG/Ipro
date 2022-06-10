import Api from '.';

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

class MockedApi extends Api {}

describe('Api 모듈의 silent refresh 테스트', () => {
  const mockedResponseBodyWhenUnauthorized = {
    access: 'access',
    requestAgain: true,
  };

  const mockedResponseBodyWhenSuccess = { ok: true };

  it('get 요청에 대해 토큰 만료 시 silent refresh가 수행되어야 합니다.', async () => {
    let isSettedAccessToken = false;
    const mockedApi = new MockedApi(mockedClient, '/api/test');

    mockedClient.get
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenUnauthorized,
        status: 200,
      })
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenSuccess,
        status: 200,
      });

    mockedClient.setHeader.mockImplementationOnce((key, value) => {
      const accessToken = mockedResponseBodyWhenUnauthorized.access;
      const bearerToken = `Bearer ${accessToken}`;
      isSettedAccessToken = key === 'Authorization' && value === bearerToken;
    });

    const response = await mockedApi.get();

    expect(isSettedAccessToken).toBeTruthy();
    expect(response.data).toBe(mockedResponseBodyWhenSuccess);
  });

  it('delete 요청에 대해 토큰 만료 시 silent refresh가 수행되어야 합니다.', async () => {
    let isSettedAccessToken = false;
    const mockedApi = new MockedApi(mockedClient, '/api/test');

    mockedClient.delete
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenUnauthorized,
        status: 200,
      })
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenSuccess,
        status: 200,
      });

    mockedClient.setHeader.mockImplementationOnce((key, value) => {
      const accessToken = mockedResponseBodyWhenUnauthorized.access;
      const bearerToken = `Bearer ${accessToken}`;
      isSettedAccessToken = key === 'Authorization' && value === bearerToken;
    });

    const response = await mockedApi.delete();

    expect(isSettedAccessToken).toBeTruthy();
    expect(response.data).toBe(mockedResponseBodyWhenSuccess);
  });

  it('post 요청에 대해 토큰 만료 시 silent refresh가 수행되어야 합니다.', async () => {
    let isSettedAccessToken = false;
    const mockedApi = new MockedApi(mockedClient, '/api/test');

    mockedClient.post
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenUnauthorized,
        status: 200,
      })
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenSuccess,
        status: 200,
      });

    mockedClient.setHeader.mockImplementationOnce((key, value) => {
      const accessToken = mockedResponseBodyWhenUnauthorized.access;
      const bearerToken = `Bearer ${accessToken}`;
      isSettedAccessToken = key === 'Authorization' && value === bearerToken;
    });

    const response = await mockedApi.post({});

    expect(isSettedAccessToken).toBeTruthy();
    expect(response.data).toBe(mockedResponseBodyWhenSuccess);
  });

  it('put 요청에 대해 토큰 만료 시 silent refresh가 수행되어야 합니다.', async () => {
    let isSettedAccessToken = false;
    const mockedApi = new MockedApi(mockedClient, '/api/test');

    mockedClient.put
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenUnauthorized,
        status: 200,
      })
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenSuccess,
        status: 200,
      });

    mockedClient.setHeader.mockImplementationOnce((key, value) => {
      const accessToken = mockedResponseBodyWhenUnauthorized.access;
      const bearerToken = `Bearer ${accessToken}`;
      isSettedAccessToken = key === 'Authorization' && value === bearerToken;
    });

    const response = await mockedApi.put({});

    expect(isSettedAccessToken).toBeTruthy();
    expect(response.data).toBe(mockedResponseBodyWhenSuccess);
  });

  it('patch 요청에 대해 토큰 만료 시 silent refresh가 수행되어야 합니다.', async () => {
    let isSettedAccessToken = false;
    const mockedApi = new MockedApi(mockedClient, '/api/test');

    mockedClient.patch
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenUnauthorized,
        status: 200,
      })
      .mockResolvedValueOnce({
        data: mockedResponseBodyWhenSuccess,
        status: 200,
      });

    mockedClient.setHeader.mockImplementationOnce((key, value) => {
      const accessToken = mockedResponseBodyWhenUnauthorized.access;
      const bearerToken = `Bearer ${accessToken}`;
      isSettedAccessToken = key === 'Authorization' && value === bearerToken;
    });

    const response = await mockedApi.patch({});

    expect(isSettedAccessToken).toBeTruthy();
    expect(response.data).toBe(mockedResponseBodyWhenSuccess);
  });
});
