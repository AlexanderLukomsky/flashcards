import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoutes } from '@components/layouts/protected';
import { AuthRedirect } from '@components/layouts/auth-redirect';
import { MainLayout } from '@components/layouts/main';
import { protectedRoutes } from './protected-routes';
import { unprotectedRoutes } from './unprotected-routes';

export const router = createBrowserRouter([
  {
    path: '/',

    children: [
      {
        element: <ProtectedRoutes />,
        children: [{ element: <MainLayout />, children: protectedRoutes }],
      },

      { element: <AuthRedirect />, children: unprotectedRoutes },
    ],
  },
]);
