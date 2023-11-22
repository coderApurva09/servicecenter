import React,{useState} from 'react'

import { Grid } from '@mui/material';
import SingleButton from './SingleButton';
import SingleCheck from './SingleCheck';


function CheckUnCheckList({ItemList,clickItem }) {

   const onClick = (value) => {
      ItemList = ItemList.map((item) => {
        return item.Id === value.Id ?
          value :
          { ...item, IsActive: false}
      });
      clickItem(ItemList)
    }
  
   
  return (

    <Grid container spacing={1}>
    
    {ItemList.map((item, i) => {
      
           return (
            <Grid  item xs={6} md={3} key={i}>
            <SingleCheck Item={item}
             ClickItem={onClick}></SingleCheck>
              </Grid>
            )
          })
        }
    </Grid>
  )
}

export default CheckUnCheckList