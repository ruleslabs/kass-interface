import { useNavigate } from 'react-router-dom'

import * as styles from './style.css'
import { Row } from 'src/theme/components/Flex'
import Box from 'src/theme/components/Box'
import SearchBar from '../SearchBar'
import * as Icons from 'src/theme/components/Icons'
import Web3Status from '../Web3Status'

export default function NavBar() {
  const navigate = useNavigate()

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
          <Web3Status />
        </Box>
      </Row>
    </nav>
  )
}
