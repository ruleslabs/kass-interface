import { useEffect } from 'react'
import { Connector } from '@web3-react/types'

import { Connection, networkConnection, useGetConnection } from 'src/connections'
import { useBoundStore } from 'src/state'

async function connect(connector: Connector) {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly()
    } else {
      await connector.activate()
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`)
  }
}

export default function useEagerlyConnect() {
  const { selectedWallet, selectWallet } = useBoundStore()
  const getConnection = useGetConnection()

  let selectedConnection: Connection | undefined
  if (selectedWallet) {
    try {
      selectedConnection = getConnection(selectedWallet)
    } catch {
      selectWallet()
    }
  }

  useEffect(() => {
    connect(networkConnection.connector)

    if (selectedConnection) {
      connect(selectedConnection.connector)
    } // The dependency list is empty so this is only run once on mount
  }, [])
}
