/* eslint-disable @typescript-eslint/no-var-requires */
import './theme/css/global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'

import { EthereumProvider, StarknetProvider } from './components/Web3Provider'
import { apolloClient } from './graphql/data/apollo'

import App from './App'

window.Buffer = window.Buffer || require('buffer').Buffer

const container = document.getElementById('root')
if (!container) throw 'Undefined #root container'

const root = createRoot(container)
root.render(
  <StarknetProvider>
    <EthereumProvider>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </EthereumProvider>
  </StarknetProvider>
)
