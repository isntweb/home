import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopMenu from '../components/TopMenu'

export default function Facebook() {
  return (
    <div className={styles.siteWindow}>
      <TopMenu side={
        <>
          E-mail:
          <input/>
          Password:
          <input/>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
            <button>Login</button>
            <button>Register</button>
          </div>
        </>
      }
               header="Welcome to Facebook!">
        <p>
          <strong>
            The Facebook is an online directory that connects people through social networks at schools.
          </strong>
        </p>
        <p>
          Now there are two Facebooks; one for people in <b>college</b> and one for people in <b>high school</b>.
        </p>

        <p>
          The site is open to a lot of schools, but not everywhere yet. We're working on it.
        </p>
        <p>
          You can use Facebook to:
        </p>

        <ul>
          <li>Look up people at your school.</li>
          <li>See how people know each other.</li>
          <li>Find people in your classes and groups.</li>
        </ul>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <button>Login</button>
          <button>Register</button>
        </div>
      </TopMenu>

    </div>
  );
}
