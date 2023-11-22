import { Card, Grid, Hidden, Tooltip, Typography } from '@mui/material'
import React,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function TabulerCard({item ,clickEdit ,Submit ,Delete ,Submit1=undefined}) {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {

      if (window.innerWidth < 900) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }
  window.addEventListener('resize', handleResize)
  return (
    <div>
          <Card sx={{ mb: 1 }}  >
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Hidden mdDown>
              <Tooltip title={item.Text2} placement="left-start">
           <Typography px={3} sx={{overflow:"hidden" ,whiteSpace:"nowrap" ,textOverflow:"ellipsis", width:"300px"}}>{item.Text2}</Typography>
           {/* <Typography dangerouslySetInnerHTML={{ __html: item.Text2 }} px={3} sx={{overflow:"hidden" ,whiteSpace:"nowrap" ,textOverflow:"ellipsis", width:"300px"}}></Typography> */}
            </Tooltip>
          
              </Hidden>
          
              <Grid item xs={3} md={2}>
                <Typography>{item.Text1}</Typography>
              </Grid>
              <Grid item xs={4.5} md={2}>
                <Typography>{item.Text3}</Typography>
              </Grid>
          
              <Grid item xs={1.5} md={1}>
                {
                  !item.IsSubmited && <SendIcon color={'info'}  onClick={() => Submit(item.Id)} />
                }
              </Grid>
              <Grid item xs={1.5} md={1}>
                <EditIcon color={'success'} onClick={() => clickEdit(item.Id)} />
              </Grid>
              <Grid item xs={1.5} md={1}>
                <DeleteIcon  color={'error'} onClick={() => Delete(item.Id)} />
              </Grid>
              {/* {Submit1 &&  <Grid item xs={2} md={1}>
                <ArrowForwardIcon color={'secondary'} onClick={() =>Submit1(item.Id)} />
              </Grid> } */}
             
            </Grid>
          </Card>

    </div>
  )
}

export default TabulerCard