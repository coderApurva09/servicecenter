import type { ReactNode } from 'react';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  badgeTooltip?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'General',
    items: [
    
      {
        name: 'DashBoard',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/DashBoard'
      },

      {
        name: 'SchoolList',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/SchoolList'
      },

      {
        name: 'ChangePassword',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/ChangePassword'
      },

      {
        name: 'AddHomeWork',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/AddHomeWork'
      },

      {
        name: 'PhotoGallery',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/ViewPhotoAlbum'
      },
      
      {
        name: 'AddStaff',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/AddStaff'
      },
      
      {
        name: 'Login',
        icon: AccountTreeTwoToneIcon,
        link: '/extended-sidebar/Student/Login'
      },
      
    {
      name:'Homework',
      icon: AccountTreeTwoToneIcon,
      link:'/extended-sidebar/Student/Homework'
    },
    {
      name:'AddPhoto',
      icon: AccountTreeTwoToneIcon,
      link:'/extended-sidebar/Student/AddPhoto'
    },


    

    ]
  },
];

export default menuItems;
