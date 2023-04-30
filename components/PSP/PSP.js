import classes from './psp.module.scss';
// https://images.versus.io/objects/sony-psp-1000.front.variety.1591878256408.jpg
// better: https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Psp-1000.jpg/2880px-Psp-1000.jpg

const PSP = ({ innerRef }) = {
  return (
    <div className={classes.psp}>
      <div className={classes.leftButtons}>
      </div>
      <div className={classes.screen}/>
      <div className={classes.rightButtons}>
      </div>
      <div className={classes.bottomBorder}>
        PSP
      </div>
    </div>
  );
}

export default PSP;
