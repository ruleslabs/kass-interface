import { useNavigate } from 'react-router-dom'

import * as styles from './style.css'
import { PrimaryButton } from '../Button/style.css'
import { Row } from 'src/theme/components/Flex'
import Box from 'src/theme/components/Box'
import SearchBar from '../SearchBar'
import * as Icons from 'src/theme/components/Icons'
import ConnectWallet from '../Wallet/Connect'
import { useReducer } from 'react'

export default function NavBar() {
  const navigate = useNavigate()

  const [showWalletConnection, toggleWalletConnection] = useReducer((state) => !state, false)

  return (
    <nav className={styles.Nav}>
      <Row>
        <Box className={styles.leftSideContainer}>
          <Box className={styles.logoContainer}>
            <Icons.Logo onClick={() => { navigate({ pathname: '/test' }) }} />
          </Box>
        </Box>

        <Box className={styles.searchContainer}>
          <SearchBar />
        </Box>

        <Box className={styles.rightSideContainer}>
          <Box as={'button'} className={PrimaryButton} onClick={toggleWalletConnection}>
            Connect wallet
          </Box>
        </Box>
      </Row>

      {showWalletConnection && <ConnectWallet close={toggleWalletConnection} />}
    </nav>
  )
}
