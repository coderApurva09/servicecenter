import React from 'react'
import { Card, Typography ,Grid, Container, IconButton} from '@mui/material'
import { Link } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { IconCardSize } from 'src/library/StyledComponents/CommonStyled';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PasswordIcon from '@mui/icons-material/Password';
function DashBoard() {
 const itemList=[
 {
    Text:"AddStaff",
    iconColor: '#35abd9',
    Link: 'Student/AddStaff',
    icon: <PeopleIcon fontSize='large'/>
 },


{
  Text:"Login",
  Link: 'Student/Login',
  icon : <LockOpenIcon fontSize='large'/>
},
{
  Text:"Change",
  Text2:"Password",
  Link: 'Student/ChangePassword',
  iconColor: '#f0483e',
  icon : <PasswordIcon fontSize='large'/>
},

{
  Text:"Executive",
  Text2:"ListView",
  Link: 'Student/ExecutiveViewList',
  iconColor: '#35abd9',
  icon : <ListAltIcon fontSize='large'/>
}
// {
//   Text:"Admission",
//   Text2:"Form",
//   Link: 'Student/AdmissionForm',
//   iconColor: '#f0483e',
//   icon : <AddToQueueIcon fontSize='large'/>
// }

]

  return (
    <Container>
       <Grid container spacing={2} mt={2}>
        {itemList.map((item,i)=>(
          <Grid item xs={3} key={i}>
            <Link to={`/${location.pathname.split('/')[1]}/${item.Link}`} style={{ textDecoration: 'none' }}>
            <IconCardSize>
            <IconButton sx={{color:item.iconColor}}>{item.icon}</IconButton>
            <Typography sx={{textAlign:"center" ,textDecoration:"none" , color:"black", mt:"-10px"}} variant='h1'>{item.Text}</Typography>
            <Typography sx={{textAlign:"center" ,textDecoration:"none" , color:"black" }}  variant='h1'>{item.Text2}</Typography>
            </IconCardSize>
            </Link>
            </Grid>
          
          
          ))}
            </Grid> 
    </Container>
  )
}

export default DashBoard