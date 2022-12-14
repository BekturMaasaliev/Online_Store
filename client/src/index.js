import { createBrowserHistory } from 'history';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
<BrowserRouter>

    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore(),
    }} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Context.Provider>
</BrowserRouter>

);
