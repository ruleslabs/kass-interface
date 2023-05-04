import { useCallback } from 'react'

import { useBoundStore } from 'src/state'
import { Connection } from 'src/connections'
import { didUserReject } from 'src/connections/utils'
import { ActivationStatus } from 'src/state/l1Wallet'

export function useTryActivation() {
  const {
    setActivationStatus,
    setActivationConnection,
    setActivationError,
    resetActivationState,
    selectWallet,
  } = useBoundStore()

  return useCallback(
    async (connection: Connection, onSuccess: () => void) => {
      // Skips wallet connection if the connection should override the default
      // behavior, i.e. install MetaMask or launch Coinbase app
      if (connection.overrideActivate?.()) return

      try {
        setActivationStatus(ActivationStatus.PENDING)
        setActivationConnection(connection)

        console.debug(`Connection activating: ${connection.getName()}`)
        await connection.connector.activate()

        console.debug(`Connection activated: ${connection.getName()}`)
        selectWallet(connection.type)

        // Clears pending connection state
        resetActivationState()

        onSuccess()
      } catch (error) {
        // TODO(WEB-3162): re-add special treatment for already-pending injected errors & move debug to after didUserReject() check
        console.debug(`Connection failed: ${connection.getName()}`)
        console.error(error)

        // Gracefully handles errors from the user rejecting a connection attempt
        if (didUserReject(connection, error)) {
          resetActivationState()
          return
        }

        // Failed Connection events are logged here, while successful ones are logged by Web3Provider
        setActivationStatus(ActivationStatus.ERROR)
        setActivationError(error)
      }
    },
    []
  )
}

export function useCancelActivation() {
  const { status, connection, resetActivationState } = useBoundStore()

  return useCallback(() => {
    connection?.connector.deactivate?.()
    resetActivationState()
  }, [status])
}
