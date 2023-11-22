import { Typography } from '@mui/material'
import React from 'react'

function ErrorMessage({error}) {
  return (
    <div>
      <Typography sx={{textAlign:"center" , color:"red"}}>{error}</Typography>  
    </div>
  )
}

export default ErrorMessage