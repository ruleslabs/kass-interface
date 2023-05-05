import { StateCreator } from 'zustand'

import { StoreState } from './index'

export enum ModalType {
  WALLET_CONNECT,
  WALLET_OVERVIEW,
}

export interface ApplicationSlice {
  modal: ModalType | null

  isModalOpened: (modal: ModalType) => boolean
  openModal: (modal: ModalType) => void
  closeModals: () => void
  toggleModal: (modal: ModalType) => void
}

export const createApplicationSlice: StateCreator<StoreState, [], [], ApplicationSlice> =
  (set, get) => ({
      modal: null,

      isModalOpened: (modal) => get().modal === modal,
      openModal: (modal) => set({ modal }),
      closeModals: () => set({ modal: null }),
      toggleModal: (modal: ModalType) => set((state) => ({ modal: modal === state.modal ? null : modal })),
  })
