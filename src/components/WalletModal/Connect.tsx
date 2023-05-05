import { useWeb3React } from '@web3-react/core'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { Column } from 'src/theme/components/Flex'
import { getConnections } from 'src/connections'
import Option from './Option'
import ConnectionErrorContent from './ConnectionErrorContent'
import { useWalletConnectModal } from 'src/hooks/useModal'
import { useActivationState } from 'src/hooks/useWalletActivation'
import { ActivationStatus } from 'src/state/l1Wallet'

function WalletConnectContent() {
  const { account } = useWeb3React()
  const connections = getConnections()

  // modal
  const [, toggle] = useWalletConnectModal()

  // wallet activation
  const { activationState } = useActivationState()

  if (activationState.status === ActivationStatus.ERROR) {
    return <ConnectionErrorContent />
  } else if (!account) {
    return (
      <Content title={'Connect Ethereum wallet'} close={toggle}>
        <Column gap={'8'}>
          {connections
            .filter((connection) => connection.shouldDisplay())
            .map((connection) => <Option key={connection.getName()} connection={connection} />)}
        </Column>
      </Content>
    )
  } else {
    return (
      <Content title={'Connect Starknet wallet'} close={toggle}>
        {' '}
      </Content>
    )
  }
}

export default function WalletConnectModal() {
  // modal
  const [isOpen, toggle] = useWalletConnectModal()

  if (!isOpen) return null

  return (
    <Portal>
      <WalletConnectContent />

      <Overlay onClick={toggle} />
    </Portal>
  )
}
