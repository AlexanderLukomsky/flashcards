import { AuthPath } from '@components/router/router-path';
import { Navigate, Outlet } from 'react-router-dom';
import { useMeQuery } from 'services/auth';

export const ProtectedRoutes = () => {
  const { data, isLoading, isSuccess } = useMeQuery();

  if (isLoading) {
    return null;
  }

  return data && isSuccess ? <Outlet /> : <Navigate to={AuthPath.SIGN_IN} />;
};
