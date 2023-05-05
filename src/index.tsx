import './theme/css/global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import Web3Provider from './components/Web3Provider'

import App from './App'

window.Buffer = window.Buffer || require("buffer").Buffer

const root = createRoot(document.getElementById('root')!)
root.render(
  <Web3Provider>
    <App />
  </Web3Provider>
)
