import { StateCreator } from 'zustand'

import { Connection } from 'src/connections'
import { StoreState } from './index'

export enum ActivationStatus {
  PENDING,
  ERROR,
  IDLE,
}

export interface L1WalletSlice {
  status: ActivationStatus
  connection?: Connection
  error?: any

  setActivationStatus: (status: ActivationStatus) => void
  setActivationConnection: (connection: Connection) => void
  setActivationError: (error: any) => void
  resetActivationState: () => void
}

const IDLE_ACTIVATION_STATE = { status: ActivationStatus.IDLE, connection: undefined, error: undefined }

export const createL1WalletSlice: StateCreator<StoreState, [], [], L1WalletSlice> =
  (set) => ({
    status: ActivationStatus.IDLE,

    setActivationStatus: (status) => set({ status }),
    setActivationConnection: (connection) => set({ connection }),
    setActivationError: (error) => set({ error }),
    resetActivationState: () => set(IDLE_ACTIVATION_STATE),
  })
