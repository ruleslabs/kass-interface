import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'
import { Column } from 'src/theme/components/Flex'

import { getConnections } from 'src/connections'
import Option from './Option'

interface ConnectWalletProps {
  close: () => void
}

export default function ConnectWallet({ close }: ConnectWalletProps) {
  const connections = getConnections()

  return (
    <Portal>
      <Content title={'Connect Ethereum wallet'} close={close}>
        <Column gap={'8'}>
          {connections
            .filter((connection) => connection.shouldDisplay())
            .map((connection) => <Option key={connection.getName()} connection={connection} />)}
        </Column>
      </Content>

      <Overlay onClick={close} />
    </Portal>
  )
}
