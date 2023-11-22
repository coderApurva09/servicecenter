import { createSlice } from '@reduxjs/toolkit'
import GetExecutiveViewListApi from "../../api/ExecutiveViewList/ApiExecutiveViewList";
//import IGetExecutiveListViewBody from "src/Interface/ExecutiveViewList/IExecutiveViewList";
//import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';

const ExecutiveViewSlice = createSlice({
  name: 'ExecutiveView',
  initialState:{
    executiveViewList:[]
  },
  reducers: {
    getExecutiveViewList(state,action){
      state.executiveViewList=action.payload;
      //alert("SLice Reducer Method:"+ JSON.stringify(state.executiveViewList))
    }
  }   
});


export const getexecutiveViewList =
  (data): AppThunk =>
  async (dispatch) => {
    const response = await GetExecutiveViewListApi.GetExecutiveViewList(data);
    let exeviewlist = response.data.map((item,i)=>{
         return {
           Id:item.AssignId,
           Text1:  item.VRN,
           Text2:item.CustomerName,
           Text3 : item.AreaName,
           Text4:item.AssignDate,
           Text5 :item.Status
           //Text3: window.URL.createObjectURL(new Blob([item.Attachment]))
      
  }      
      
     })
     //dispatch(SchoolNoticeSlice.actions.GetSchoolNotice(SchoolNoticeList))
    dispatch(ExecutiveViewSlice.actions.getExecutiveViewList(exeviewlist));
    //console.log("Async Mehtod :"+ JSON.stringify(response.data));
  };


export default ExecutiveViewSlice.reducer
