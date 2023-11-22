import React from 'react'
import { Box , Card, Typography } from '@mui/material'
function Card4Text({ Text1, Text2, Text3 , Text4}) {
  return (
    <Card component={Box} mb={1}>
    <Box display={"flex"} justifyContent={'space-between'}  p={1}>
      <Typography variant='h5'>
          {Text1}
        </Typography>
      <Typography variant='body2' >
         {Text2}
     </Typography>
    </Box>
    <Box display={"flex"} justifyContent={'space-between'}>
    <Typography variant='body2' pl={1} pb={1}>
         {Text3}
     </Typography>
     <Typography variant='body2' pl={1} pb={1} pr={1}>
         {Text4}
     </Typography>
     </Box>
    </Card>
  )
}

export default Card4Text