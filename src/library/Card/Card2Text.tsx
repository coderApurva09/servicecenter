import React from 'react'
import { Box , Card, Typography } from '@mui/material'
function Card2Text({ Item,clickNavigate}) {
  // function Card2Text({ Text1,Text2,clickNavigate ,Link}) {
  return (
    <>
    {/* <a href="http://google.com" rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}> */}
    <a href={Item.Link} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
       <Card component={Box} mb={1} onClick={()=>{clickNavigate(Item.Id)}}>
    <Box display={"flex"} justifyContent={'space-between'}  p={0.5}>
      <Typography variant="h5">
          {Item.Text1}
        </Typography>
      <Typography variant='body2' color={"Green"} >
         {Item.Text2}
     </Typography>
    </Box>
    </Card>
    </a>
    
    </>
 
  )
}

export default Card2Text