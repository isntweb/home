import Link from 'next/link';
import TopMenu from '../components/TopMenu';

const ErrPage = () => {
  return (
    <TopMenu header="Lost?">
      <p>
        This page could not be found.
      </p>
      <p>
        Go <Link href="/">home</Link>.
      </p>
    </TopMenu>
  )
}

export default ErrPage;
