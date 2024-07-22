import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ErrorBoundary from './components/Error/ErrorBoundary.tsx';
import FallBack from './components/Error/FallBack.tsx';
import { ThemeProvider } from './components/Theme/ThemeContext.tsx';
import { Provider } from 'react-redux';
import { store } from './state/store.ts';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <ErrorBoundary fallback={<FallBack />}>
          <App />
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
