import { useState, useEffect } from 'react';

import classes from './pocketOperator.module.scss'

// awesome buttons and rubber texture;
// https://codepen.io/soulwire/pen/neJZgM

const controlButtons = [
  'a', 'b', 'c', 'd', 'e',
]

const buttonGrid = [
  [1, 2, 3, 4, '*'],
  [5, 6, 7, 8, 'fx'],
  [9, 10, 11, 12, '>'],
  [13, 14, 15, 16, '.']
]

const beats = 16;

const Knob = ({ name }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => (rotation + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.knobContainer}>
      <div className={classes.knob}>
        <div
          className={classes.knobOval}
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
    </div>
  );
}

const Button = ({ name }) => {
  return (
    <div className={classes.button} >
      {name}
    </div>
  );
}

const TimeBox = () => {
  const [time, setTime] = useState('00:00');
  const [amPM, setAmPM] = useState('AM');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const minutes = date.getHours();
      const seconds = date.getMinutes();
      setTime(`${minutes}${seconds}`);
      setAmPM(date.getHours() > 12 ? 'PM' : 'AM');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
  const selectedModeIdx = 2;
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

const PocketOperator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.leftCutout}>
          JAM
        </div>
        <div className={classes.operatorText}>
          pocket operator
        </div>
        <div className={classes.rightCutout}></div>
        <div className={classes.lcd}>
          <MetronomeAndMode/>
          <TimeBox/>
          <Beats/>

        </div>
        <div className={classes.buttonsTop}>
          {controlButtons.map((name, index) => {
            const Component = [3, 4].includes(index) ? Knob : Button;
            return (
              <Component name={name}/>
            );
          })}
        </div>
        <div className={classes.buttons}>
          {buttonGrid.map((row, i) =>
            <div className={classes.buttonRow}>
              {row.map((cell, i) => (
                <Button name={cell} key={i}/>
              ))}
            </div>
          )}
        </div>
        <div className={classes.bottomCutoutContainer}>
          <div className={classes.bottomCutout}/>
        </div>
      </div>
    </div>
  );
}

export default PocketOperator;
