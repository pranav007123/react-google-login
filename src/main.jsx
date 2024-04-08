import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './bootstrap.min.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="377558101832-fekv2ge2o9h85h0q759an16sl53nbt63.apps.googleusercontent.com">
   <BrowserRouter> <App /></BrowserRouter>
   </GoogleOAuthProvider>;
  </React.StrictMode>,
)
