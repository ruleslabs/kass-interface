import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { L1WalletSlice, createL1WalletSlice } from './l1Wallet'
import { UserSlice, createUserSlice } from './user'
import { ApplicationSlice, createApplicationSlice } from './application'

export type StoreState = L1WalletSlice & UserSlice & ApplicationSlice

const PERSISTING_KEYS: (keyof StoreState)[] = ['selectedL1Wallet']

export const useBoundStore = create<StoreState>()(
  persist(
    immer<StoreState>((...a) => ({
      ...createUserSlice(...a),
      ...createL1WalletSlice(...a),
      ...createApplicationSlice(...a),
    })),
    {
      name: 'kass-state-storage',
      partialize: (state: StoreState) =>
        PERSISTING_KEYS.reduce<StoreState>((acc, key) => {
          ;(acc as any)[key] = state[key]
          return acc
        }, {} as StoreState),
    }
  )
)
