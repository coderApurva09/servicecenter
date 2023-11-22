import { Typography } from '@mui/material'
import React from 'react'

function ErrorMessageForm({error}) {
  return (
    <div>
      <Typography sx={{ color:"red"}}>{error}</Typography>  
    </div>
  )
}

export default ErrorMessageForm