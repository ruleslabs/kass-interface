import * as styles from './index.css'

export default function Search() {
  return (
    <input className={styles.Search} type={'text'} placeholder={'Search tokens...'} />
  )
}
