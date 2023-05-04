import { useWeb3React } from '@web3-react/core'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { Column } from 'src/theme/components/Flex'
import { getConnections } from 'src/connections'
import Option from './Option'
import { useBoundStore } from 'src/state'
import { ModalType } from 'src/state/application'

function WalletModalContent() {
  const { account } = useWeb3React()

  // modal
  const { toggleWalletConnectModal } = useBoundStore()

  const connections = getConnections()

  if (!account) {
    return (
      <Content title={'Connect Ethereum wallet'} close={toggleWalletConnectModal}>
        <Column gap={'8'}>
          {connections
            .filter((connection) => connection.shouldDisplay())
            .map((connection) => <Option key={connection.getName()} connection={connection} />)}
        </Column>
      </Content>
    )
  } else {
    return (
      <Content title={'Connect Starknet wallet'} close={toggleWalletConnectModal}>
        {' '}
      </Content>
    )
  }
}

export default function WalletConnectModal() {
  // modal
  const { isModalOpened, toggleWalletConnectModal } = useBoundStore()
  const isOpen = isModalOpened(ModalType.WALLET_CONNECT)

  if (!isOpen) return null

  return (
    <Portal>
      <WalletModalContent />

      <Overlay onClick={toggleWalletConnectModal} />
    </Portal>
  )
}
