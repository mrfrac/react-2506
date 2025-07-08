import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/app/App.tsx';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
