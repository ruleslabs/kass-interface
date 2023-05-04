import { StateCreator } from 'zustand'

import { StoreState } from './index'

export enum ModalType {
  WALLET_CONNECT,
  WALLET_OVERVIEW,
}

export interface ApplicationSlice {
  modal?: ModalType

  isModalOpened: (modal: ModalType) => boolean
  openModal: (modal: ModalType) => void
  closeModals: () => void
  toggleWalletConnectModal: () => void
  toggleWalletOverviewModal: () => void
}

export const createApplicationSlice: StateCreator<StoreState, [], [], ApplicationSlice> =
  (set, get) => {
    const toggleModal = (modal: ModalType) => set((state) => ({ modal: modal === state.modal ? undefined : modal }))

    return {
      isModalOpened: (modal) => get().modal === modal,
      openModal: (modal) => set({ modal }),
      closeModals: () => set({ modal: undefined }),
      toggleWalletConnectModal: () => toggleModal(ModalType.WALLET_CONNECT),
      toggleWalletOverviewModal: () => toggleModal(ModalType.WALLET_OVERVIEW),
    }
  }
