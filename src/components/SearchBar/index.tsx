import Box from 'src/theme/components/Box'
import * as styles from './style.css'
import { vars } from 'src/theme/css/vars.css'
import * as Icons from 'src/theme/components/Icons'

export default function SearchBar() {
  return (
    <Box className={styles.SearchBarContainer}>
      <Box className={styles.searchContentLeftAlign}>
        <Icons.Search />
      </Box>
      <Box as='input' className={styles.Search} type={'text'} placeholder={'Search tokens...'} />
    </Box>
  )
}
