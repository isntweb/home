import { useAnimate } from '../../../hooks/useAnimate';
import classes from './knob.module.scss';

const Knob = ({ name }) => {
  const rotation = useAnimate(
    { max: 360, frequency: 10 }
  );

  return (
    <div className={classes.knobContainer}>
      <div className={classes.knobTopFastener}/>
      <div className={classes.knobBottomFastener}/>
      <div className={classes.knob}>
        <div
          className={classes.knobOval}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}

export default Knob;
