import { LoginRequestBody, UpdateInfoResponseBody } from '@/types';
import Api from '../api';

class UserApi extends Api {
  async signup(reqData: LoginRequestBody): Promise<UpdateInfoResponseBody> {
    const response = await this.post<UpdateInfoResponseBody, LoginRequestBody>(
      reqData,
    );

    return response.data;
  }
}

export default UserApi;
