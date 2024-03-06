import React from 'react';
import ReactDOM from 'react-dom/client'

import store from "./app/store";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>

  </React.StrictMode>,
)
