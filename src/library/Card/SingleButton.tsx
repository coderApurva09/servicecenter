import { Button ,Card, Checkbox, Typography} from '@mui/material'
import React from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SingleButton = ({Item,ClickItem ,type="checkBox"}) => {
 
  const onClick=()=>{
    Item = {...Item,IsActive:Item.IsActive?Item.IsActive:!Item.IsActive}
    ClickItem(Item)}
  return (
    <div>
      {type === "checkBox" ?  <Card sx={{display:"flex"}}>
      {Item.IsActive ? <CheckCircleIcon  onClick={onClick} /> :
           <RadioButtonUncheckedIcon  onClick={onClick}  />}
          <Typography>{Item.Name}</Typography>
    </Card>:
    <Card sx={{background:Item.IsActive  ? "#90CAF9" : "#ffffff" , textAlign:"center"}}   onClick={onClick}>{Item.Name}</Card>
  }
   

    </div>
  )
}

export default SingleButton