import { PartialRouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import studentRoutes from './Student';
import landingRoutes from './Landing';
import AuthenticationRoutes from './Authentication';
const router: PartialRouteObject[] = [

  {
    path: '/',
    children: AuthenticationRoutes
  },

  // ExtendedSidebarLayout 

  {
    path: 'extended-sidebar',
    element: (
        <ExtendedSidebarLayout />
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="/Authentication" replace />
      },

      {
        path:'/landing',
        children:landingRoutes
      },
      {
        path: '/Student',
        children: studentRoutes
      }
    ]
  }
];

export default router;
