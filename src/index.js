// React Imports
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
// Context Provider
import { ContextProvider } from './contexts/ContextProvider';
// Custom Imports
import Spinner from './components/Spinner';
// Import Css
import './index.css';
// Lazy Load App
const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <ContextProvider>
        <LazyApp />
      </ContextProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
