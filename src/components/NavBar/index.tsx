import Logo from 'src/assets/logo-white.svg'
import * as styles from './style.css'
import { PrimaryButton } from '../Button/style.css'
import { Row } from 'src/theme/components/Flex'
import Box from 'src/theme/components/Box'
import SearchBar from '../SearchBar'

export default function NavBar() {
  return (
    <nav className={styles.Nav}>
      <Row>
        <Box className={styles.leftSideContainer}>
          <img height={'32px'} src={Logo} alt={'Logo'} />
        </Box>

        <Box className={styles.searchContainer}>
          <SearchBar />
        </Box>

        <Box className={styles.rightSideContainer}>
          <button className={PrimaryButton}>Connect wallet</button>
        </Box>
      </Row>
    </nav>
  )
}
