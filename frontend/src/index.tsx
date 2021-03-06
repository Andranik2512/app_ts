import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';

import styled, {createGlobalStyle} from 'styled-components'
import store from './redux/store';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}
body{
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
}
img{
  width: 100%;
  object-fit: contain;
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
  </Provider>

);

