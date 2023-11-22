import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  Avatar, Typography, Popover, Button, List, ListItem, ListItemText
} from '@mui/material';

import { SidebarContext } from 'src/contexts/SidebarContext';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';


const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: 0;
            width: auto;
        }
`
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(2)};
`
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.sidebar.menuItemColor};
    display: block;
    @media (max-width: 280px) {
      font-size: 11px;
    };
    &.popoverTypo {
      color: ${theme.palette.secondary.main};
    }
`
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
    color: ${alpha(theme.sidebar.menuItemColor, 0.6)};

    &.popoverTypo {
      color: ${theme.palette.secondary.light};
    };
    @media (max-width: 280px) {
      font-size: 11px;
    };
`
);



function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const ref = useRef<any>(null);
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };
  const handleLogout = async (): Promise<void> => {
    try {
      sessionStorage.clear();
      localStorage.removeItem("auth");
      handleClose();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? '0 1px 0 ' +
            alpha(lighten(theme.colors.primary.main, 0.7), 0.15) +
            ', 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)'
            : '0px 2px 8px -3px ' +
            alpha(theme.colors.alpha.black[100], 0.2) +
            ', 0px 5px 22px -4px ' +
            alpha(theme.colors.alpha.black[100], 0.1)
      }}
    >
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        alignItems="center"
        spacing={2}
      >
        {/* <Avatar variant="rounded" sx={{ margin: 'auto', maxHeight: 70, }} />a */}
        <img src='/images/CarService1.png' style={{ width: 110 }} />
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton
          size="small"
          sx={{
            width: 35,
            height: 35,
            '&:hover': {
              color: `${theme.colors.alpha.trueWhite[100]}`,
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`
            }
          }}
          ref={ref}
          onClick={handleOpen}
        >
          {/* color:#90caf9 */}
          <Avatar alt="user.name" src={''} sx={{ backgroundColor: "#0000cc", height: 50 }} variant="rounded" aria-label="add" />
        </IconButton>
        <Popover
          disableScrollLock
          anchorEl={ref.current}
          onClose={handleClose}
          open={isOpen}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center'
          }}
        >
          <MenuUserBox
            sx={{
              minWidth: 600
            }}
            display="flex"
          >
            <Avatar variant="rounded" alt="user.name" src={''} />
            <UserBoxText>
              <UserBoxLabel className="popoverTypo">
                {sessionStorage.getItem("UserName")}
              </UserBoxLabel>
              <UserBoxDescription className="popoverTypo" >
                {sessionStorage.getItem("ClassDivisionName")}
              </UserBoxDescription>
            </UserBoxText>
          </MenuUserBox>
          <Divider sx={{ mb: 0 }} />
          <List sx={{ p: 1 }} component="nav">
          <ListItem
            onClick={() => {
              handleClose();
            }}
            button
            to={"/extended-sidebar/Student/changePassword"}
            component={NavLink}
          >
            <LockOpenTwoToneIcon fontSize="small" sx={{color:"blue"}} />
            <ListItemText sx={{color:"blue"}} primary={('Change Password')} />
          </ListItem>
          </List>
          <Divider sx={{ mb: 0 }} />
          <Box sx={{ textAlign: "center" }} m={1}>
            <IconButton onClick={handleLogout}>
              <ExitToAppIcon fontSize="small"
                sx={{
                  mr: 1,
                  fontWeight: "bold",
                  color: "#053082"
                }}
              />
              <UserBoxLabel sx={{ color: "blue", fontWeight: "bold" }}
                onClick={handleLogout}>Sign Out</UserBoxLabel>
            </IconButton>
          </Box>
        </Popover>
      </Stack>

    </HeaderWrapper>
  );
}

export default Header;
