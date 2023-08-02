import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@components/router';
import { store } from 'redux/store';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import './styles/index.scss';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
