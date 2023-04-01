import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import '../src/FireBase/config'
// import {Provider} from 'react-redux'
// import {store} from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
  <React.StrictMode>
    {/*<Provider store={store}>*/}
      <App />
  {/*</Provider>*/}
  </React.StrictMode>
    </BrowserRouter>
);

//import {BrowserRouter, Route, Routes} from "react-router-dom"; - ворнинги на роут роутс