import { Typography ,Grid ,Button} from '@mui/material'
import React,{useState} from 'react'

function MonthYearDropDown({itemList ,onClickItem ,month}) {
 
  return (
    <div>
 

  <Grid container>
    <Grid item xs={1} >
     <Button >pre</Button> 
    </Grid>
    <Grid item xs={10}>
    {itemList.map((item , i)=>(
    <div key={i} >
   <Typography>{item.Name}</Typography>     
   </div>
  ))}
    </Grid>
    <Grid item xs={1}>
      Next
    </Grid>
    
    </Grid>     
    </div>
  )
}

export default MonthYearDropDown