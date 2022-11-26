import Image from 'next/image'
import mattPic from '../public/matt.png'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ProfileMenu from '../components/ProfileMenu';
import TopMenu from '../components/TopMenu';


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


export default function Home() {
  return (
    <TopMenu side={<ProfileMenu />} header={
      <>
        <div>
          Matt
        </div>
        <div>
          Profile (This is you)
        </div>
        <div>
          Facebook
        </div>
      </>
    }>
      <main className={styles.main}>
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
    </TopMenu>
  );
}
