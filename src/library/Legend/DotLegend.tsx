import { Typography,Box } from '@mui/material'
import React from 'react'
import { DotLegendStyled } from '../StyledComponents/DotLegendStyled'


const DotLegend = ({ItemList}) => {
  return (<>
    {
      ItemList.map((item,i)=>{ return (<Box key={i} sx={{display:"flex" }}>
     <DotLegendStyled  style={{backgroundColor:item.Value}}/>
    <Typography variant='h6' mt={-0.7}>{item.Name}</Typography>
    </Box>)
      })
      }
    </>
  )
}

export default DotLegend