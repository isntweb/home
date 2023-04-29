import classes from './pocketOperator.module.scss'

const controlButtons = [
  'a', 'b', 'c', 'd', 'e',
]

const buttonGrid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const beats = 16;

const Knob = ({ name }) => {
  return (
    <div className={classes.knob}>
      <div className={classes.knobName}>{name}</div>
      <div className={classes.knobValue}>0</div>
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

const TimeBox = ({}) =>  {
  return (
    <div className={classes.timeBox}>
      <div className={classes.timeNumber}>
        136
      </div>
      <div className={classes.amPM}>
        PM
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

const PocketOperator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.leftCutout}></div>
        <div className={classes.operatorText}>
          pocket operator
        </div>
        <div className={classes.rightCutout}></div>
        <div className={classes.lcd}>
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
      </div>
    </div>
  );
}

export default PocketOperator;
