import '../styles/globals.css'
import HomePage from '../components/HomePage.js'

function MyApp({ Component, pageProps }) {
  return (
    <HomePage>
      <Component {...pageProps} />
    </HomePage>
  );
}

export default MyApp;
