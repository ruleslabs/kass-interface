import './theme/css/global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import { EthereumProvider, StarknetProvider } from './components/Web3Provider'
import { apolloClient } from './graphql/data/apollo'

import App from './App'

window.Buffer = window.Buffer || require("buffer").Buffer

const root = createRoot(document.getElementById('root')!)
root.render(
  <StarknetProvider>
    <EthereumProvider>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </EthereumProvider>
  </StarknetProvider>
)
