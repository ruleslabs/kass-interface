import { useCallback } from 'react'
import { shallow } from 'zustand/shallow'

import { useBoundStore } from 'src/state'
import { ModalType } from 'src/state/application'

export function useCloseModal(): () => void {
  const { closeModals } = useBoundStore(
    (state) => ({ closeModals: state.closeModals }),
    shallow
  )

  return closeModals
}

export default function useModal(modal: ModalType): [boolean, () => void] {
  const { toggleModal, isModalOpened } = useBoundStore(
    (state) => ({ toggleModal: state.toggleModal, isModalOpened: state.isModalOpened }),
  )

  const isOpen = isModalOpened(modal)
  const toggle = useCallback(() => toggleModal(modal), [modal, toggleModal])

  return [isOpen, toggle]
}

export const useWalletConnectModal = () => useModal(ModalType.WALLET_CONNECT)

export const useL1WalletOverviewModal = () => useModal(ModalType.L1_WALLET_OVERVIEW)

export const useL2WalletOverviewModal = () => useModal(ModalType.L2_WALLET_OVERVIEW)
