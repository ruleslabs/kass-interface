import Box from 'src/theme/components/Box'
import Overlay from '../Modal/Overlay'
import Portal from '../common/Portal'
import Content from '../Modal/Content'

interface ConnectWalletProps {
  close: () => void
}

export default function ConnectWallet({ close }: ConnectWalletProps) {
  return (
    <Portal>
      <Content title={'Connect Ethereum wallet'} close={close}>
      </Content>

      <Overlay onClick={close} />
    </Portal>
  )
}
