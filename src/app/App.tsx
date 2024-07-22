import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';

import './App.css';

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
