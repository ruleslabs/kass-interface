import Logo from 'src/assets/logo-white.svg'
import Search from '../Search'
import * as styles from './index.css'
import { PrimaryButton } from '../Button/index.css'

export default function NavBar() {
  return (
    <nav className={styles.Nav}>
      <img height={'32px'} src={Logo} alt={'Logo'} />

      <Search />

      <button className={PrimaryButton}>Connect wallet</button>
    </nav>
  )
}
