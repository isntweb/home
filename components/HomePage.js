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

          {children}
      </div>
    </div>
  );
}

export default HomePage;
