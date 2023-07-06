import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { shallow } from 'zustand/shallow'
import { useConnectors, useNetwork } from '@starknet-react/core'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { useBoundStore } from 'src/state'
import { getChainInfo } from 'src/constants/chainInfo'
import { SecondaryButton } from '../Button'
import { useL1WalletOverviewModal, useL2WalletOverviewModal, useCloseModal } from 'src/hooks/useModal'

interface WalletOverviewModalProps {
  chainLabel?: string
  disconnect: () => void
}

function WalletOverviewModal({ chainLabel, disconnect }: WalletOverviewModalProps) {
  // modal
  const close = useCloseModal()

  // disconnect
  const disconnectAndClose = useCallback(() => {
    disconnect()
    close()
  }, [disconnect, close])

  return (
    <Portal>
      <Content title={`${chainLabel} wallet`} close={close}>
        <SecondaryButton onClick={disconnectAndClose}>Disconnect</SecondaryButton>
      </Content>

      <Overlay onClick={close} />
    </Portal>
  )
}

export function L1WalletOverviewModal() {
  // modal
  const [isOpen] = useL1WalletOverviewModal()

  // disconnect
  const { connector } = useWeb3React()
  const selectL1Wallet = useBoundStore((state) => state.selectL1Wallet, shallow)

  const disconnect = useCallback(() => {
    if (connector && connector.deactivate) {
      connector.deactivate()
    }
    connector.resetState()

    selectL1Wallet(null)
  }, [connector, selectL1Wallet])

  // chain infos
  const { chainId } = useWeb3React()
  const chainInfo = getChainInfo(chainId)

  if (!isOpen) return null

  return <WalletOverviewModal chainLabel={chainInfo?.label} disconnect={disconnect} />
}

export function L2WalletOverviewModal() {
  // modal
  const [isOpen] = useL2WalletOverviewModal()

  // disconnect
  const { disconnect } = useConnectors()

  // chain infos
  const { chain } = useNetwork()
  const chainInfo = getChainInfo(chain?.id)

  if (!isOpen) return null

  return <WalletOverviewModal chainLabel={chainInfo?.label} disconnect={disconnect} />
}
