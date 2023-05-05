import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { shallow } from 'zustand/shallow'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { useBoundStore } from 'src/state'
import { SupportedChainId } from 'src/constants/chains'
import { getChainInfo } from 'src/constants/chainInfo'
import Box from 'src/theme/components/Box'
import { SecondaryButton } from '../Button/style.css'
import { useWalletOverviewModal } from 'src/hooks/useModal'

interface WalletOverviewModalProps {
  chainId: SupportedChainId
}

export default function WalletOverviewModal({ chainId }: WalletOverviewModalProps) {
  // modal
  const [isOpen, toggle] = useWalletOverviewModal()

  // deactivation
  const { connector } = useWeb3React()
  const selectWallet = useBoundStore((state) => state.selectWallet, shallow)

  const disconnect = useCallback(() => {
    if (connector && connector.deactivate) {
      connector.deactivate()
    }
    connector.resetState()

    selectWallet()

    toggle()
  }, [connector, selectWallet, toggle])

  // chain infos
  const chainInfo = getChainInfo(chainId)

  if (!isOpen || !chainInfo) return null

  return (
    <Portal>
      <Content title={`${chainInfo.label} wallet`} close={toggle}>
        <Box as={'button'} className={SecondaryButton} onClick={disconnect}>
          Disconnect
        </Box>
      </Content>

      <Overlay onClick={toggle} />
    </Portal>
  )
}
