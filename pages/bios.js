import styles from '../styles/Bios.module.css'
import Image from 'next/image'

const Bios = () => (
  <div className={styles.menu}>
    <Image src="/bios-background.gif" alt="" className={styles.background} height={400} width={800}/>
    <img src="https://i.pinimg.com/originals/b6/fe/0c/b6fe0c5fd3c211e729aabeca0597fa0e.gif" className={styles.background}/>
    <div className={styles.title}>
      Coffee Machine Setup Utility - Copyleft 2222-9999 isnt AB
    </div>
    <div className={styles.menuBorder}>
        <div className={styles.menuBody}>
          <ul>
            <li>Hey</li>
          </ul>
        </div>
        <div className={styles.menuBody}>
          <ul>
            <li>The girl reading this</li>
          </ul>
        </div>
        <wh className={styles.menuFooter1}>
            <div style={{ width: '50%'}}>
                Esc : Quit
                <br/>
                F10 : Save & Exit Setup
            </div>

            <div style={{ width: '50%'}}>
                ↑ ↓ → ←   : Select Item
            </div>
        </wh>
        <div className={styles.menuFooter2}>
          Time, Date, hard Disk Type...
        </div>
    </div>
  </div>
);

export default Bios;
//
