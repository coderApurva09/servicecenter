
import http from "../../utils/http-common";
//import IGetExecutiveListViewBody from "src/Interface/ExecutiveViewList/IExecutiveViewList";
import IGetExecutiveListViewResult from "src/Interface/ExecutiveViewList/IExecutiveViewList"
  const GetExecutiveViewList = (data) => {
    return http.post<IGetExecutiveListViewResult[]>('GetExecutiveViewList',data);
  };
  
const GetExecutiveViewListApi ={
    GetExecutiveViewList
}
//console.log("GetExecutiveViewList",GetExecutiveViewList)
export default GetExecutiveViewListApi;
