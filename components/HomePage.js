import Head from 'next/head'
import Image from 'next/image'
import styles from './HomePage.module.css'

const HomePage = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>isnt.online</title>
        <meta name="description" content="isnt.online is a creative studio... blah blah blah." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.siteWindowContainer}>
        <div className={styles.siteWindow}>
          {children}
        </div>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export default HomePage;