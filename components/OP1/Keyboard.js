import classes from './Keyboard.module.scss';

const numToArray = (n) => [...Array(n)];

const Keyboard = () => {
  return (
    <div className={classes.keyboard}>
      {numToArray(4).map(( _, i ) => (
        <div className={classes.blackKeyGroup} style={{ gridColumn: i + 1 }} key={`black-key-group-${i}`}>
          <div className={classes.blackKeyBlockLong}>
            <div className={classes.blackKeyRight}/>
          </div>
          {i % 2 === 0 && (
            <div className={classes.blackKeyBlockShort}>
              <div className={classes.blackKey} />
            </div>
          )}
          <div className={classes.blackKeyBlockLong}>
            <div className={classes.blackKeyLeft} />
          </div>
        </div>
      ))}
      {numToArray(4).map((_, i) => (
        <div className={classes.whiteKeyGroup} style={{ gridColumn: i + 1 }} key={`white-key-group-${i}`}>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey}/>
          </div>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey}/>
          </div>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey} />
          </div>
          {i % 2 === 0 && (
            <div className={classes.whiteKeyBlock}>
              <div className={classes.whiteKey} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
