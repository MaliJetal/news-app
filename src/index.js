import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import {Provider} from "react-redux";
import {store} from './store';

axios.defaults.withCredentials = false;
axios.defaults.baseURL =  'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
