import { useTime } from '../../../../hooks';
import classes from './timeBox.module.scss';

const TimeBox = () => {
  const { time, amPM } = useTime();

  return (
    <div className={classes.timeBox}>
      <div className={classes.timeNumber}>
        {time}
      </div>
      <div className={classes.amPM}>
        {amPM}
      </div>
    </div>
  );
}


export default TimeBox;
