import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { L1WalletSlice, createL1WalletSlice } from './l1Wallet'
import { UserSlice, createUserSlice } from './user'
import { ApplicationSlice, createApplicationSlice } from './application'

export type StoreState = L1WalletSlice & UserSlice & ApplicationSlice

const PERSISTING_KEYS: (keyof StoreState)[] = ['selectedWallet']

export const useBoundStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
      ...createL1WalletSlice(...a),
      ...createApplicationSlice(...a),
    }),
    {
      name: 'kass-state-storage',
      partialize: (state) => (PERSISTING_KEYS.reduce<StoreState>(
        (acc, key) => {
          acc[key] = state[key]
          return acc
        },
        {} as StoreState)
      ),
    },
  )
)
