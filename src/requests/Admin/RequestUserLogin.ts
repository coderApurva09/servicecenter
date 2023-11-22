import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IUserLoginBody,IUserLoginResult} from "src/Interface/Admin/IUserLogin"
import UserLoginApi from 'src/api/Admin/ApiUserLogin';


const UserLoginSlice = createSlice({
    name: 'UserLogin',
    initialState:{
      UserLogin:null
      
     
    },
    reducers: {
     
      UserLogin(state,action){
        state.UserLogin=action.payload;
      },
      resetUserLogin(state){
        state.UserLogin=null;
      },
    }   
  });

  export const UserLogin =
  (data:IUserLoginBody): AppThunk =>
  async (dispatch) => {
    const response = await UserLoginApi.UserLogin(data);
    dispatch(UserLoginSlice.actions.UserLogin(response.data));
  };
  export const resetUserLogin =
  (): AppThunk =>
  async (dispatch) => {
    dispatch(UserLoginSlice.actions.resetUserLogin());
  };

  export default UserLoginSlice.reducer