import { StateCreator } from 'zustand'

import { L1Connection } from 'src/connections'
import { StoreState } from './index'

export enum ActivationStatus {
  PENDING,
  ERROR,
  IDLE,
}

export interface L1WalletSlice {
  l1WalletActivationStatus: ActivationStatus | null
  l1WalletActivationConnection: L1Connection | null
  l1WalletActivationError: any | null

  setl1WalletActivationStatus: (status: ActivationStatus) => void
  setl1WalletActivationConnection: (connection: L1Connection) => void
  setl1WalletActivationError: (error: any) => void
  resetl1WalletActivationState: () => void
}

const IDLE_ACTIVATION_STATE = {
  l1WalletActivationStatus: ActivationStatus.IDLE,
  l1WalletActivationConnection: null,
  l1WalletActivationError: null,
}

export const createL1WalletSlice: StateCreator<StoreState, [], [], L1WalletSlice> =
  (set) => ({
    ...IDLE_ACTIVATION_STATE,

    setl1WalletActivationStatus: (status) => set({ l1WalletActivationStatus: status }),
    setl1WalletActivationConnection: (connection) => set({ l1WalletActivationConnection: connection }),
    setl1WalletActivationError: (error) => set({ l1WalletActivationError: error }),
    resetl1WalletActivationState: () => set(IDLE_ACTIVATION_STATE),
  })
