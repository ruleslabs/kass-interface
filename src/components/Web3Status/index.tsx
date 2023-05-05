import { useWeb3React } from '@web3-react/core'

import Box from 'src/theme/components/Box'
import { PrimaryButton, SecondaryButton } from '../Button/style.css'
import WalletConnectModal from '../WalletModal/Connect'
import { shortenL1Address } from 'src/utils/address'
import WalletOverviewModal from '../WalletModal/Overview'
import { useWalletConnectModal, useWalletOverviewModal } from 'src/hooks/useModal'

export function Web3StatusContent() {
  const { account } = useWeb3React()

  // modal
  const [, toggleWalletConnectModal] = useWalletConnectModal()
  const [, toggleWalletOverviewModal] = useWalletOverviewModal()

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
      <WalletOverviewModal chainId={1} />
    </>
  )
}
