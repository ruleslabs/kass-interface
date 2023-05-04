import { useWeb3React } from '@web3-react/core'

import Box from 'src/theme/components/Box'
import { PrimaryButton, SecondaryButton } from '../Button/style.css'
import WalletConnectModal from '../WalletModal/Connect'
import { useBoundStore } from 'src/state'
import { shortenL1Address } from 'src/utils/address'
import WalletOverviewModal from '../WalletModal/Overview'

export function Web3StatusContent() {
  const { account } = useWeb3React()

  // modal
  const { toggleWalletConnectModal, toggleWalletOverviewModal } = useBoundStore()

  if (account) {
    return (
      <Box as={'button'} className={SecondaryButton} onClick={toggleWalletOverviewModal}>
        {shortenL1Address(account)}
      </Box>
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
      <WalletOverviewModal />
    </>
  )
}
