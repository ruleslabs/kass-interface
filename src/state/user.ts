import { StateCreator } from 'zustand'

import { ConnectionType } from 'src/connections'
import { StoreState } from './index'

// selectedL2Wallet is already handled by @starknet-react/core

export type UserSlice = State & Actions

export interface State {
  selectedL1Wallet: ConnectionType | null
}

export interface Actions {
  selectL1Wallet: (selectedL1Wallet: ConnectionType | null) => void
}

export const createUserSlice: StateCreator<StoreState, [['zustand/immer', never]], [], UserSlice> = (set) => ({
  selectedL1Wallet: null,

  selectL1Wallet: (selectedL1Wallet) => set({ selectedL1Wallet }),
})
