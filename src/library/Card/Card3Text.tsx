import React from 'react'
import { Box , Card, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
function Card3Text({ Text1, Text2, Text3, textVariant = 'body2' ,Id ,Delete}) {
  return (
    <Card component={Box} mb={1} mt={1}>
    <Box display={"flex"} justifyContent={'space-between'}>
      <Typography variant='h5'>
          {Text1}
        </Typography>
      <Typography variant='body2' >
         {Text2}
     </Typography>
    </Box>
    <Box display={"flex"} justifyContent={'space-between'}>
    <Typography variant='body2'>
         {Text3}
     </Typography>
     <IconButton onClick={()=>Delete(Id)} sx={{mt:"-8px"}}>
     <DeleteIcon color={'error'}/>
     </IconButton>
     </Box>
    </Card>
  )
}

export default Card3Text