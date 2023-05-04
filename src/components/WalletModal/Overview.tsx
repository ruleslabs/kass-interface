import { useWeb3React } from '@web3-react/core'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { useBoundStore } from 'src/state'
import { ModalType } from 'src/state/application'

export default function WalletOverviewModal() {
  // modal
  const { isModalOpened, toggleWalletOverviewModal } = useBoundStore()
  const isOpen = isModalOpened(ModalType.WALLET_OVERVIEW)

  const { account } = useWeb3React()

  if (!isOpen) return null

  return (
    <Portal>
      <Content title={'Your wallet'} close={toggleWalletOverviewModal}>
        <h1>{account}</h1>
      </Content>

      <Overlay onClick={toggleWalletOverviewModal} />
    </Portal>
  )
}
