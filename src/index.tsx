import './theme/css/global.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

interface ContextProvidersProps {
  children: React.ReactNode
}

function ContextProviders({ children }: ContextProvidersProps) {
  return <>{children}</>
}

function Updaters() {
  return <></>
}

ReactDOM.render(
  <ContextProviders>
    <Updaters />
    <App />
  </ContextProviders>,
  document.getElementById('root')
)
