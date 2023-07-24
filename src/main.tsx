import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@common/router/router.tsx';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
