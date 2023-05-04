import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface WalletConnectionState {
  walletConnectionOpened: boolean
  toggleWalletConnection: () => void
}

export const useWalletConnection = create<WalletConnectionState>()(
  devtools(
    (set, get) => ({
      walletConnectionOpened: false,
      toggleWalletConnection: () =>
        set(({ walletConnectionOpened }) => ({ walletConnectionOpened: !walletConnectionOpened })),
    }),
    { name: 'useWalletConnection' }
  )
)
