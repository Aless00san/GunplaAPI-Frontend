import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from "react";
import './index.css'
import App from './components/App.jsx'
import { Navbar } from './components/Navbar.jsx'


createRoot(document.getElementById("body")).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
