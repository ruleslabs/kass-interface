import './theme/css/global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'

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

const root = createRoot(document.getElementById('root')!)
root.render(
  <ContextProviders>
    <Updaters />
    <App />
  </ContextProviders>
)
