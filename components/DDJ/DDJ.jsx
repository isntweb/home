import { useState } from 'react';

const classes = import './ddj.module.scss';

const Fader = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={classes.fader}>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const Encoder = ({ toplabel, minLabel, maxLabel }) => {
  /* the level is 0 to 100 */
  const level = useState(0);
  return (
    <div className={classes.encoderBox}>
    <div className={classes.encoderTopLabel}>
      {topLabel}
    </div>
    <div className={classes.encoderMinLabel}>
      {minLabel}
    </div>
    <div className={classes.encoderMaxLabel}>
      {maxLabel}
    </div>

    </div>
  );
}

const Deck = () => {
  return (
    <div className={classes.ddj}>
    </div>
  );
};


const Mixer = () => {
  return (
    <div className={classes.mixer}>
    </div>
  );
}

const DDJ = () => {
  return (
    /* this is the 3d part. figure out how that works! */
    <div className={classes.body}>
      <Deck  />
      <Mixer />
      <Deck  />
    </div>
  );
}

export default DDJ;
