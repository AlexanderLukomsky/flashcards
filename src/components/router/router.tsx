import { createBrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { MainLayout } from '@components/layouts/main';
import { SignInPage } from '@pages/auth/sign-in';
import { RegistrationPage } from '@pages/auth/registration';
import { Auth } from './router-path';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    element: <MainLayout />,
    children: [
      { path: Auth.SignIn, element: <SignInPage /> },
      { path: Auth.Registration, element: <RegistrationPage /> },
    ],
  },
]);
