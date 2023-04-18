import React, { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import {Provider} from 'redux-react'
import { Provider } from "react-redux";
import {store} from './store'

// import {createRoot} from 'react-dom/client'
import { createRoot } from "react-dom/client";
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
