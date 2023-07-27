import { createBrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { MainLayout } from '@components/layouts/main';
import { SignInPage } from '@pages/auth/sign-in';
import { Auth } from '.';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    element: <MainLayout />,
    children: [{ path: Auth.SignIn, element: <SignInPage /> }],
  },
]);
