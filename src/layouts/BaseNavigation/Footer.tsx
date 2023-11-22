import { Paper ,Box , IconButton, Fab} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';

function Footer() {

  const UserType = sessionStorage.getItem('UserType');
  const redirectURL = sessionStorage.getItem("UserRoleId") === "3" ?
  '/extended-sidebar/landing/landing' :
  sessionStorage.getItem("UserRoleId") === "2" ?
  '/extended-sidebar/landing/landing' :
  '/extended-sidebar/landing/landing'
  return (
    <div>
   <Paper square>
    {/* color :#90caf9 */}
    <Box sx={{zIndex: "9999" ,textAlign:"center" ,backgroundColor:"#0000cc" , padding:"5px"}}>
      
      <Link to={redirectURL} style={{ textDecoration: 'none' }}>
        <Fab aria-label="add" size="small" sx={{ textAlign: "center", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
          <HomeIcon fontSize='large'/>
          </Fab>
          </Link>
            <Link to={redirectURL} style={{ textDecoration: 'none' }}>
            {/* {UserType === '3' && <IconButton><MenuBookIcon /> </IconButton>  } */}
            </Link>

            {/* <Link to={`/${location.pathname.split('/')[1]}/Student/ViewPhotoAlbum`} style={{ textDecoration: 'none' }}>
            {UserType === '3' && <IconButton><AddPhotoAlternateIcon /> </IconButton>  }
            </Link>

            <Link to={`/${location.pathname.split('/')[1]}/Student/AddHomeWork`} style={{ textDecoration: 'none' }}>
            {UserType === '2' && <IconButton><ChromeReaderModeIcon /> </IconButton>  }
            </Link> */}
      </Box>
      </Paper>
    </div>
  )
}

export default Footer