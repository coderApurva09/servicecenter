import { Button ,Card, Checkbox, Typography} from '@mui/material'
import React from 'react'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SingleCheck = ({Item,ClickItem}) => {

  const onClick=()=>{
    Item = {...Item,IsActive:!Item.IsActive}
    ClickItem(Item)}
  return (
    <div>
    <Card sx={{display:"flex"}}>
      {Item.IsActive ?  
           <CheckCircleIcon  onClick={onClick}  />:
           < RadioButtonUncheckedIcon  onClick={onClick} />}
          <Typography>{Item.Name}</Typography>
    </Card>
  
   

    </div>
  )
}

export default SingleCheck