import styles from '../styles/Bios.module.css';

const Bios = () => (
  <div className={styles.menu}>
    <img src="https://i.pinimg.com/originals/b6/fe/0c/b6fe0c5fd3c211e729aabeca0597fa0e.gif" className={styles.background}/>
    <div className={styles.title}>
      Tea Brewing Setup Utility - Copyleft 1984-1999 tmg GbR
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
