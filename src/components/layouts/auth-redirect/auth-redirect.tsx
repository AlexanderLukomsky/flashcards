import { Navigate } from 'react-router-dom';
import { useMeQuery } from 'services/auth';
import { MainLayout } from '../main';

export const AuthRedirect = () => {
  const { isSuccess } = useMeQuery();

  return isSuccess ? <Navigate to="/" /> : <MainLayout />;
};
