import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
//import { toast } from 'react-toastify';
import { getexecutiveViewList } from 'src/requests/ExecutiveViewList/RequestGetGetExecutiveViewList'
import IGetExecutiveListViewBody from "src/Interface/ExecutiveViewList/IExecutiveViewList";
import PageHeader from 'src/components/ExecutiveViewList/PageHeader';
import ExecutiveList from 'src/library/List/ExecutiveList';
import ToggleButtonExample from 'src/library/ToggleButtons/ToggleButtonExample';
//import TabulerList from 'src/library/List/TabulerList';

const ExecutiveViewList = () => {
    const dispatch =useDispatch()

    const [CustomerId, setCustomerId]=useState(0)

    const GetExecutiveViewList: any = useSelector((state: RootState) => state.executiveViewList.executiveViewList);
  console.log(GetExecutiveViewList,"GetExecutiveViewList")

    const executiveviewlistBody ={}
  
  useEffect(() => {
        dispatch(getexecutiveViewList(executiveviewlistBody));
  }, [])
  const HeaderArray = [
    {Id:1,Header:"VRN"},
    {Id:2,Header:"Name" },
    {Id:3,Header:"Area" },
    {Id:4,Header:"Date/Time" }, 
    {Id:4,Header:"Status" }
 ]

 const itemList = [  
{ Id:"1",Text1:"7B", Text2:"Library",IsActive:true, Text3:"Assign" , Text4:"Assign" , Text5:"Assign"},
{ Id:"2",Text1:"6B", Text2:"Books",IsActive:true, Text3:"Assign", Text4:"Assign" , Text5:"Assign"}
 ]
 const TextClick =()=>{
  
 }

  return (
    <>
    <PageHeader heading={'ExecutiveViewList'} subheading="" />
    <ToggleButtonExample />
    <ExecutiveList ItemList={GetExecutiveViewList} HeaderArray={HeaderArray} TextClick={TextClick}/>
    </>


  )
}

export default ExecutiveViewList