import http from "../../utils/http-common";
import {IUserLoginBody,IUserLoginResult} from 'src/Interface/Admin/IUserLogin'


const UserLogin = (data: IUserLoginBody) => {
    return http.post<IUserLoginResult>('UserLogin',data);
  };

  const UserLoginApi ={
    UserLogin,
}

export default UserLoginApi;
