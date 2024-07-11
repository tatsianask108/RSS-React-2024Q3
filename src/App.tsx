import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './components/pages/NotFoundPage';
import DetailedPage from './components/pages/DetailedPage';
import MainPage from './components/pages/Main/MainPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'details/:planetName',
        element: <DetailedPage />,
      },
    ],
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
