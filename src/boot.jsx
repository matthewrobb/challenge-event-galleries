import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(
  <App protocol={window.location.protocol} />,
  document.getElementById("root")
);
