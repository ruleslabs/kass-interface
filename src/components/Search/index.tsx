import * as styles from './style.css'

export default function Search() {
  return (
    <input className={styles.Search} type={'text'} placeholder={'Search tokens...'} />
  )
}
