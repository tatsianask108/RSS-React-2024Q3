import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './components/pages/404/NotFoundPage';
import DetailedPage from './components/pages/DetailedPage/DetailedPage';
import MainPage from './components/pages/Main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
    //TODO fix 404 Page - remove errorElement
    children: [
      {
        path: 'page/:pageNumber/details/:planetId',
        element: <DetailedPage />,
      },
    ],
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
