import { StateCreator } from 'zustand'

import { ConnectionType } from 'src/connections'
import { StoreState } from './index'

export interface UserSlice {
  selectedL1Wallet?: ConnectionType
  selectedL2Wallet?: ConnectionType

  selectL1Wallet: (selectedL1Wallet?: ConnectionType) => void
  selectL2Wallet: (selectedL2Wallet?: ConnectionType) => void
}

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> =
  (set) => ({
    selectL1Wallet: (selectedL1Wallet) => set({ selectedL1Wallet }),
    selectL2Wallet: (selectedL2Wallet) => set({ selectedL2Wallet }),
  })
