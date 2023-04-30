import classes from './nintendoSwitch.module.scss';
import { cx } from '../../utils';

const NintendoSwitch = ({ innerRef }) => {
  return (
    <div className={classes.switch} ref={innerRef}>
      <div className={classes.body}>
        <div className={classes.volume}/>
        <div className={classes.screen}>
          <div className={classes.logo}>
            <div className={classes.icon}>
              <div className={cx(classes.iconPart, classes.left)}/>
              <div className={cx(classes.iconPart, classes.right)}/>
            </div>
            <h1><span>Nintendo</span>Switch</h1>
          </div>
        </div>
      </div>

      <div className={cx(classes.joycon, classes.left)}>
        <div className={classes.buttonGroup}>
          <div className={cx(classes.button, classes.arrow, classes.up)} />
          <div className={cx(classes.button, classes.arrow, classes.right)} />
          <div className={cx(classes.button, classes.arrow, classes.down)} />
          <div className={cx(classes.button, classes.arrow, classes.left)} />
        </div>

        <div className={classes.stick} />
        <div className={classes.select} />
        <div className={classes.capture} />
        <div className={cx(classes.shoulder, classes.l)} />
      </div>

      <div className={cx(classes.joycon, classes.right)}>
        <div className={classes.buttonGroup}>
          <div className={cx(classes.button, classes.letter)} data-letter="X" />
          <div className={cx(classes.button, classes.letter)} data-letter="A" />
          <div className={cx(classes.button, classes.letter)} data-letter="B" />
          <div className={cx(classes.button, classes.letter)} data-letter="Y" />
        </div>
        <div className={classes.stick} />
        <div className={classes.start} />
        <div className={classes.home} />
        <div className={cx(classes.shoulder, classes.r)} />
      </div>
    </div>
  );
}

export default NintendoSwitch;
