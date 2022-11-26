import styles from './TopMenu.module.css'
import Link from 'next/link'

const TopMenu = ({ children }) => {
  return (
    <div className={styles.body}>
      <div style={{ display: 'flex' }}>
        <div className={styles.cornerLogo}> tja </div>
        <div className={styles.topMenu}>
          <h1 className={styles.fblogo}>facebook</h1>
          <div className={styles.menuLinks}>
            <Link href="/home">home</Link>
            <Link href="/search">search</Link>
            <Link href="/browse">browse</Link>
            <Link href="/share">share</Link>
            <Link href="/invite">invite</Link>
            <Link href="/help">help</Link>
            <Link href="/logout">logout</Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default TopMenu;
