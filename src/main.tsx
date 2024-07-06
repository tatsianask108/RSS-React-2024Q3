import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import ErrorBoundary from './components/Error/Error.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p style={{ fontSize: 40, color: '#FFF' }}>An error occurred. Please, reload the page</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
