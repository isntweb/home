import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Bios.module.css'
import TopMenu from '../components/TopMenu'

function Bios() {
  return (
    <div className={styles.menu}>
        <img src="https://i.pinimg.com/originals/b6/fe/0c/b6fe0c5fd3c211e729aabeca0597fa0e.gif" className={styles.background}>
        <div> Tea Brewing Setup Utility - Copyleft 1984-1999 tmg GbR </div>
    </div>
  );
}

export default Bios;
