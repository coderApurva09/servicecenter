import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Dashboards

const ChangePassword = Loader(lazy(()=> import('src/components/ChangePassword/ChangePassword')))
 const Login = Loader(lazy(()=> import('src/components/Login/Login')))
const Dashboard = Loader(lazy(()=> import('src/components/DashBoard/DashBoard')))
const ExecutiveViewList = Loader(lazy(()=> import ('src/components/ExecutiveViewList/ExecutiveViewList')));

const studentRoutes = [
  {
    path: '/',
    element: <Navigate to="holidays" replace />
  },
  {
    path: 'Dashboard',
    element: <Dashboard/>
  },

  {
    path: 'ChangePassword',
    element: <ChangePassword />
  },
  {
    path: 'Login',
    element: <Login/>
  },

  {
    path: 'ExecutiveViewList',
    element:<ExecutiveViewList />
   }
  
];

export default studentRoutes;
