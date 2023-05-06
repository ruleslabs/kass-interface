import { useWeb3React } from '@web3-react/core'
import { useAccount } from '@starknet-react/core'

import Box from 'src/theme/components/Box'
import { PrimaryButton, SecondaryButton } from '../Button/style.css'
import WalletConnectModal from '../WalletModal/Connect'
import { shortenL1Address, shortenL2Address } from 'src/utils/address'
import { useWalletConnectModal, useL1WalletOverviewModal, useL2WalletOverviewModal } from 'src/hooks/useModal'
import { Row } from 'src/theme/components/Flex'
import { L1WalletOverviewModal, L2WalletOverviewModal } from '../WalletModal/Overview'

export function Web3StatusContent() {
  const { account: l1Account } = useWeb3React()
  const { address: l2Account } = useAccount()

  // modal
  const [, toggleWalletConnectModal] = useWalletConnectModal()
  const [, toggleL1WalletOverviewModal] = useL1WalletOverviewModal()
  const [, toggleL2WalletOverviewModal] = useL2WalletOverviewModal()

  if (l1Account && l2Account) {
    return (
      <Row gap={'8'}>
        <Box as={'button'} className={SecondaryButton} onClick={toggleL2WalletOverviewModal}>
          {shortenL2Address(l2Account)}
        </Box>

        <Box as={'button'} className={SecondaryButton} onClick={toggleL1WalletOverviewModal}>
          {shortenL1Address(l1Account)}
        </Box>
      </Row>
    )
  } else {
    return (
      <Box as={'button'} className={PrimaryButton} onClick={toggleWalletConnectModal}>
        Connect wallet
      </Box>
    )
  }
}

export default function Web3Status() {
  return (
    <>
      <Web3StatusContent />

      <WalletConnectModal />
      <L1WalletOverviewModal />
      <L2WalletOverviewModal />
    </>
  )
}
