import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider, { ThemedGlobalStyle } from './Theme'
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
    <ThemeProvider>
      <>
        <ThemedGlobalStyle />
        <App />
      </>
    </ThemeProvider>
  </ContextProviders>,
  document.getElementById('root')
)
