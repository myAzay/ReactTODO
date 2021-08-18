import React, { createContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value = {{
    user: new UserStore()
  }}>
    <ToastContainer/>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);