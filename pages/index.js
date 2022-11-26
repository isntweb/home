import Image from 'next/image'
import mattPic from '../public/matt.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Accordion = ({ title, edit, children }) => {
  return (
    <div className={styles.accordionWrapper}>
      <details className={styles.accordion}>
        <summary><span>{title}</span> {edit && <button>Edit</button>}</summary>
        <div className={styles.detailContents}>
          {children}
        </div>
      </details>
    </div>
  )
}

const InterestTable = ({ interests }) => {
  return (
    <table className={styles.interestTable}>
      {interests.map(([name, body]) => (
        <tr id={name}>
          <td> {name}: </td>
          <td> {body.map((component) => (<span id={component}>{component}</span>))} </td>
        </tr>
      ))}
    </table>
  );
}

const profile_interests = [
  ["Email", ["username@example.com"]],
  ["AIM Screenname", ["matthead"]],
  ["Mobile", ["+1 503-555-0199"]],
  ["Sex", ["Male"]],
  ["Interested In", ["Women"]]
];

const personal_interests = [
  ["Political Views", ["Moderate"]],
  ["Interests", ["Web Design", "Photography", "Almost All Music", "Tennis", "Nintendo DS Lite"]],
  ["Favorite Music", ["100 Gecs", "xaviersobased", "Bladee"]],
  ["Favorite TV Shows", ["The 100"]],
  ["Favorite Movies", ["Tarantino"]],
  ["Favorite Quotes", ["\"Drama is life with the dull bits cut out.\" - Alfred Hitchock"]],
];

const TopMenu = () => {
  return (
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
  );
}

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.sideColumn}>
        <div className={styles.cornerLogo}> tja </div>
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
      </div>

      <div className={styles.horizontalPane}>
        <TopMenu />

        <main className={styles.main}>
          <div className={styles.profileHeader}>
            <div>
              Matt
            </div>
            <div>
              Profile (This is you)
            </div>
            <div>
              Facebook
            </div>
          </div>
          <div className={styles.profileBody}>
            <div className={styles.profileBodySide}>
              <Image
                style={{ display: "block" }}
                src={mattPic}
                alt="Picture of the current user"
                width={200}
              />
              <div className={styles.linkMenu}>
                <Link href="/photos">View more photos of me</Link>
                <Link href="/notes">Read Notes about Me</Link>
                <Link href="/profile">Edit My Profile</Link>
                <Link href="/pictures">Edit My Picture</Link>
                <Link href="/privacy">Edit My Privacy</Link>
                <Link href="/badge">Create a Profile Badge</Link>
              </div>
            </div>
            <div className={styles.profileBodyMain}>
              <h1>Matt Callum Lastname</h1>
              <div>Facebook</div>
              <div>Iowa State Alum</div>
              <address>Silicon Valley, California</address>
              <hr/>

              <InterestTable interests={profile_interests} />

              <Accordion title="Mini-feed">
                content that is hidden
              </Accordion>

              <Accordion title="Personal Info" edit>
                <InterestTable interests={personal_interests} />
              </Accordion>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
