import { StateCreator } from 'zustand'

import { ConnectionType } from 'src/connections'
import { StoreState } from './index'

// selectedL2Wallet is already handled by @starknet-react/core

export interface UserSlice {
  selectedL1Wallet?: ConnectionType

  selectL1Wallet: (selectedL1Wallet?: ConnectionType) => void
}

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> =
  (set) => ({
    selectL1Wallet: (selectedL1Wallet) => set({ selectedL1Wallet }),
  })
