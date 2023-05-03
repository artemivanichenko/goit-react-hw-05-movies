import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
const Global = createGlobalStyle`
body{
  font-size: 24px;
}
li {
  list-style: none;
}
a{
  color: inherit;
}
`;
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    <Global />
  </BrowserRouter>

  // </React.StrictMode>
);
