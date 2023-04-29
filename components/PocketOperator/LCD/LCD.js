const beats = 16;

import SoundTumbler from './SoundTumbler';
import TimeBox from './TimeBox';
import classes from './lcd.module.scss';
import { useAnimate } from '../../../hooks';

const Beats = () => {
  return (
    <div className={classes.beatsContainer}>
      {Array.from(Array(beats).keys()).map((beat) => (
        <div className={classes.beat} key={beat}/>
      ))}
      <div/>
    </div>
  );
}

const MetronomeAndMode = () => {
  const modes = ['HIP-HOP', 'DISCO', 'TECHNO'];
  const selectedModeIdx = useAnimate({ max: modes.length, frequency: 1000 });

  return (
    <div className={classes.metronomeModeContainer}>
      <div className={classes.modes}>
        {modes.map((mode, idx) => (
          <div className={idx === selectedModeIdx ? classes.selectedMode : classes.mode}>
            {mode}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Indicates what pattern the user has selected */
const PatternIndicator = () => {
  const numIndicators = 8;

  return (
    <div className={classes.patternIndicator}>
      {Array.from(Array(numIndicators).keys()).map((indicator) => (
        <div className={classes.indicator} key={indicator}/>
      ))}
    </div>
  )
}

const LCD = () => {
  return (
    <div className={classes.lcd}>
      <MetronomeAndMode/>
      <TimeBox/>
      <Beats/>
      <PatternIndicator />
      <div className={classes.soundTumblerLineBox}>
        <SoundTumbler label="A"/>
        <SoundTumbler label="B"/>
      </div>
    </div>
  );
}

export default LCD;
