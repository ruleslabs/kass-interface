import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useAccount } from '@starknet-react/core'

import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { Column } from 'src/theme/components/Flex'
import { getL1Connections, getL2Connections } from 'src/connections'
import { L1Option, L2Option } from './Option'
import ConnectionErrorContent from './ConnectionErrorContent'
import { useWalletConnectModal } from 'src/hooks/useModal'
import { useL1ActivationState } from 'src/hooks/useL1WalletActivation'
import { ActivationStatus } from 'src/state/l1Wallet'

function WalletConnectContent() {
  // accounts
  const { account: l1Account } = useWeb3React()
  const { address: l2Account } = useAccount()

  // connections
  const l1Connections = getL1Connections()
  const l2Connections = getL2Connections()

  // modal
  const [, toggle] = useWalletConnectModal()

  // close modal if both layers have a connected wallet
  useEffect(() => {
    if (l1Account && l2Account) {
      toggle()
    }
  }, [toggle, l1Account, l2Account])

  // wallet activation
  const { activationState } = useL1ActivationState()

  if (activationState.status === ActivationStatus.ERROR) {
    return <ConnectionErrorContent />
  } else if (!l1Account) {
    return (
      <Content title={'Connect Ethereum wallet'} close={toggle}>
        <Column gap={'8'}>
          {l1Connections
            .filter((connection) => connection.shouldDisplay())
            .map((connection) => (
              <L1Option key={connection.getName()} connection={connection} />
            ))}
        </Column>
      </Content>
    )
  } else {
    return (
      <Content title={'Connect Starknet wallet'} close={toggle}>
        <Column gap={'8'}>
          {l2Connections
            .filter((connection) => connection.shouldDisplay())
            .map((connection) => (
              <L2Option key={connection.getName()} connection={connection} />
            ))}
        </Column>
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
