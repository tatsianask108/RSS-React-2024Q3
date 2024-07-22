import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './components/pages/404/NotFoundPage';
import DetailedPage from './components/pages/DetailedPage/DetailedPage';
import MainPage from './components/pages/Main/MainPage';
import FallBack from './components/Error/FallBack';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <FallBack />,
    children: [
      {
        path: 'page/:pageNumber/details/:planetId',
        element: <DetailedPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
