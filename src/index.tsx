import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const rootContainer = document.getElementById('root');

if (rootContainer) {
  const root = ReactDOMClient.createRoot(rootContainer);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
