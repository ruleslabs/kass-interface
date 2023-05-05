import { useCallback } from 'react'

import { useBoundStore } from 'src/state'
import { Connection } from 'src/connections'
import { didUserReject } from 'src/connections/utils'
import { ActivationStatus } from 'src/state/l1Wallet'
import { shallow } from 'zustand/shallow'

export function useTryActivation() {
  const { setStatus, setConnection, setError, reset, selectWallet } = useBoundStore(
    (state) => ({
      setStatus: state.setl1WalletActivationStatus,
      setConnection: state.setl1WalletActivationConnection,
      setError: state.setl1WalletActivationError,
      reset: state.resetl1WalletActivationState,
      selectWallet: state.selectWallet,
    }),
    shallow
  )

  return useCallback(
    async (connection: Connection, onSuccess: () => void) => {
      // Skips wallet connection if the connection should override the default
      // behavior, i.e. install MetaMask or launch Coinbase app
      if (connection.overrideActivate?.()) return

      try {
        setStatus(ActivationStatus.PENDING)
        setConnection(connection)

        console.debug(`Connection activating: ${connection.getName()}`)
        await connection.connector.activate()

        console.debug(`Connection activated: ${connection.getName()}`)
        selectWallet(connection.type)

        // Clears pending connection state
        reset()

        onSuccess()
      } catch (error) {
        // TODO(WEB-3162): re-add special treatment for already-pending injected errors & move debug to after didUserReject() check
        console.debug(`Connection failed: ${connection.getName()}`)
        console.error(error)

        // Gracefully handles errors from the user rejecting a connection attempt
        if (didUserReject(connection, error)) {
          reset()
          return
        }

        // Failed Connection events are logged here, while successful ones are logged by Web3Provider
        setStatus(ActivationStatus.ERROR)
        setError(error)
      }
    },
    [setStatus, setConnection, setError, reset, selectWallet]
  )
}

function useCancelActivation() {
  const { connection, reset } = useBoundStore(
    (state) => ({ connection: state.l1WalletActivationConnection, reset: state.resetl1WalletActivationState }),
    shallow
  )

  return useCallback(() => {
    connection?.connector.deactivate?.()
    reset()
  }, [connection?.type, reset])
}

export function useActivationState() {
  const activationState = useBoundStore(
    (state) => ({
      status: state.l1WalletActivationStatus,
      connection: state.l1WalletActivationConnection,
      error: state.l1WalletActivationError,
    }),
    shallow
  )
  const tryActivation = useTryActivation()
  const cancelActivation = useCancelActivation()

  return { activationState, tryActivation, cancelActivation }
}
