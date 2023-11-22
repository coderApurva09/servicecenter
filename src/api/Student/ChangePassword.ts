import http from "../../utils/http-common";
import {IChangePasswordBody ,IChangePasswordResult } from "src/Interface/ChangePassword";

  const GetChangePassword = (data: IChangePasswordBody) => {
    return http.post<IChangePasswordResult>('ChangePassword',data);
  };
  
const ChangePasswordApi ={
    GetChangePassword
}

export default ChangePasswordApi;
