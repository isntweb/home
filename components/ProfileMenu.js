import styles from './ProfileMenu.module.css'
import Link from 'next/link';

const ProfileMenu = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.sidebar}>
        <input/>
        <div className={styles.linkMenu}>
          <Link href="/home">My Profile</Link>
          <Link href="/search">My Friends</Link>
          <Link href="/browse">My Photos</Link>
          <Link href="/share">My Notes</Link>
          <Link href="/invite">My Groups</Link>
          <Link href="/help">My Events</Link>
          <Link href="/logout">My Messages</Link>
          <Link href="/logout">My Account</Link>
          <Link href="/logout">My Privacy</Link>
        </div>
      </div>
    <div className={styles.horizontalPane}>
        {children}
      </div>
    </div>
  );
}

export default ProfileMenu;
