import { AuthPath } from '@components/router/router-path';
import { Navigate, Outlet } from 'react-router-dom';
import { useMeQuery } from 'services/auth';

export const ProtectedRoutes = () => {
  const { data, isLoading } = useMeQuery();

  if (isLoading) {
    return null;
  }

  return data ? <Outlet /> : <Navigate to={AuthPath.SIGN_IN} />;
};
