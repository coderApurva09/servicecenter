import { combineReducers } from '@reduxjs/toolkit';

import ChangePasswordslice from 'src/requests/ChangePassword/ChangePassword'
import UserLoginSlice, { UserLogin } from 'src/requests/Admin/RequestUserLogin'
import ExecutiveViewSlice from "src/requests/ExecutiveViewList/RequestGetGetExecutiveViewList";

const rootReducer = combineReducers({
        ChangePassword:ChangePasswordslice,
        UserLogin:UserLoginSlice,
     executiveViewList:ExecutiveViewSlice

   
});

export default rootReducer;
