import styles from './TopMenu.module.css'
import Link from 'next/link'

const TopMenu = ({side, header, children }) => {
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
      <div style={{ display: 'flex' }}>
        <div className={styles.sidebar}>
          {side}
        </div>
        <div className={styles.horizontalPane}>
          <div className={styles.profileHeader}>
            {header}
          </div>
          <div className={styles.horizontalPaneWindow}>
            {children}
          </div>
          <footer className={styles.footer}>
            <div>
              <Link href="/about">about</Link>
              <Link href="/jobs">jobs</Link>
              <Link href="/advertise">advertise</Link>
              <Link href="/terms">terms</Link>
              <Link href="/privacy">privacy</Link>
            </div>
            <div>a Mark Zuckerberg production </div>
            <div>Facebook C 2005</div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
