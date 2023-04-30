import classes from './dsLite.module.scss';

const DSLite = () => {
  return (
    <div className={classes.nintendoDS}>
      <div className={classes.topScreen}>
        <div className={classes.speakerHole} id={classes.sh1} />
        <div className={classes.speakerHole} id={classes.sh2} />
        <div className={classes.screen} />
        <div className={classes.speakerHole} id={classes.sh3} />
        <div className={classes.speakerHole} id={classes.sh4} />
      </div>
      <div className={classes.hinge}>
        <div className={classes.mic} />
        <div className={classes.light} />
      </div>
      <div className={classes.bottomScreen}>
        <div className={classes.screen}/>
        <div className={classes.dPad}>
          <div className={classes.dPadMarker} id={classes.dpm1} />
          <div className={classes.dPadMarker} id={classes.dpm2} />
          <div className={classes.dPadMarker} id={classes.dpm3} />
          <div className={classes.dPadMarker} id={classes.dpm4} />
        </div>
        <div className={classes.button} id={classes['X']}> X </div>
        <div className={classes.button} id={classes['A']}> A </div>
        <div className={classes.button} id={classes['B']}> B </div>
        <div className={classes.button} id={classes['Y']}> Y </div>
        <div className={classes.smallButton} id={classes.start} />
        <div className={classes.smallButton} id={classes.select} />
      </div>
    </div>
  );
}

export default DSLite;
