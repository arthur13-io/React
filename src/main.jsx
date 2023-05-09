import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> {/*This is to prevent unnecessary bugs during development mode */}
    <App />
  </React.StrictMode>,
)
