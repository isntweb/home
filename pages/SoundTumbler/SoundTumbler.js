import classes from './soundTumbler.module.scss';

import { useAnimate } from '../useAnimate';

const SoundTumbler = ({ label }) => {
  const numLines = 8;
  const linesLit = useAnimate({ max: numLines, frequency: 100 });

  return (
    <div className={classes.soundTumbler}>
      <div className={classes.soundTumblerLabel}>
        {label}
      </div>
      <div className={classes.soundTumblerBody}>
        <div className={classes.soundTumblerTop}/>
        {Array.from(Array(numLines).keys()).map((line, i) => (
          <div className={
                 linesLit > i
                   ? classes.soundTumblerLineLit
                   : classes.soundTumblerLine}
               key={line}
          />
        ))}
        <div className={classes.soundTumblerBottom}/>
      </div>
    </div>
  )
}

export default SoundTumbler;
