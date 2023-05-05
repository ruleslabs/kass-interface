import Box from 'src/theme/components/Box'
import { PrimaryButton, SecondaryButton } from '../Button/style.css'
import * as Text from 'src/theme/components/Text'
import { ActivationStatus } from 'src/state/l1Wallet'
import noop from 'src/utils/noop'
import { Column } from 'src/theme/components/Flex'
import { useWalletConnectModal } from 'src/hooks/useModal'
import { useActivationState } from 'src/hooks/useWalletActivation'
import Content from '../Modal/Content'

// TODO(cartcrom): move this to a top level modal, rather than inline in the drawer
export default function ConnectionErrorContent() {
  // modal
  const [, toggle] = useWalletConnectModal()

  // wallet activation
  const { activationState, tryActivation, cancelActivation } = useActivationState()

  if (activationState.status !== ActivationStatus.ERROR || !activationState.connection) return null

  // idk why ts cannot detect that connection cannot be null at this point of the code :/
  const retry = () => tryActivation(activationState.connection!, noop)

  return (
    <Content title={'Error connecting'} close={toggle}>
      <Column>
        <Text.Body marginBottom={'24'} textAlign={'center'}>
          The connection attempt failed. Please click try again and follow the steps to connect in your wallet.
        </Text.Body>

        <Box as={'button'} className={PrimaryButton} onClick={retry} marginBottom={'12'}>
          Try Again
        </Box>

        <Box as={'button'} className={SecondaryButton} onClick={cancelActivation}>
          Back to wallet selection
        </Box>
      </Column>
    </Content>
  )
}
