import { StateCreator } from 'zustand'

import { ConnectionType } from 'src/connections'
import { StoreState } from './index'

export interface UserSlice {
  selectedWallet?: ConnectionType

  selectWallet: (selectedWallet?: ConnectionType) => void
}

export const createUserSlice: StateCreator<StoreState, [], [], UserSlice> =
  (set) => ({
    selectWallet: (selectedWallet) => set({ selectedWallet }),
  })
