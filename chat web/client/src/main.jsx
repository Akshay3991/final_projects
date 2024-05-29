import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from "@mui/material"
import { HelmetProvider } from "react-helmet-async"
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CssBaseline />
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
