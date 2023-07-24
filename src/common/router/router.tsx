import { SignInPage } from '@pages/auth/sign-in';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { Auth } from '.';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    element: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <Outlet />
      </div>
    ),
    children: [{ path: Auth.SignIn, element: <SignInPage /> }],
  },
]);
