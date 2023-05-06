import { useWeb3React } from '@web3-react/core'
import { useAccount } from '@starknet-react/core'

import { PrimaryButton, SecondaryButton } from '../Button'
import WalletConnectModal from '../WalletModal/Connect'
import { shortenL1Address, shortenL2Address } from 'src/utils/address'
import { useWalletConnectModal, useL1WalletOverviewModal, useL2WalletOverviewModal } from 'src/hooks/useModal'
import { Row } from 'src/theme/components/Flex'
import { L1WalletOverviewModal, L2WalletOverviewModal } from '../WalletModal/Overview'
import * as Icons from 'src/theme/components/Icons'
import Box from 'src/theme/components/Box'
import * as styles from './styles.css'
import { style } from '@vanilla-extract/css'

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
        <SecondaryButton onClick={toggleL2WalletOverviewModal} withIcon>
          <Row gap={'8'}>
            <Box className={styles.iconContainer}>
              <Icons.Starknet />
            </Box>
            {shortenL2Address(l2Account)}
          </Row>
        </SecondaryButton>

        <SecondaryButton onClick={toggleL1WalletOverviewModal} withIcon>
          <Row gap={'8'}>
            <Box className={styles.iconContainer}>
              <Icons.Ethereum />
            </Box>
            {shortenL1Address(l1Account)}
          </Row>
        </SecondaryButton>
      </Row>
    )
  } else {
    return (
      <PrimaryButton onClick={toggleWalletConnectModal}>
        Connect wallet
      </PrimaryButton>
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
