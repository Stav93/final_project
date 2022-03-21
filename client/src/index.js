import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRoutes from '../src/components/AppRoutes.js'
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from "../src/components/Login/AuthContext.js"
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  </AuthContextProvider> 
  , document.getElementById('root'));

reportWebVitals();
