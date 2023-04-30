import classes from './op1.module.scss';
import Keyboard from './Keyboard';

const cx = (...args) => args.join(' ');


const BCon = ({ children }) => (
  <div className={classes.buttonBlock}>
    <div className={classes.button}>
      {children}
    </div>
  </div>
);

const ImageButton = ({ width, alt, src } = { width: "24", alt: "alt" }) => (
  <BCon>
    <img
      width={width}
      alt={alt}
      src={src}
    />
  </BCon>
);

const TwoElemButton = ({ e1, e2 }) => {
  return (
    <BCon>
      <div className={classes.buttonsTwoElements}>
        <p className={classes.normal18px}>
          {e1}
        </p>
        {typeof e2 === 'string' ? (
          <p className={classes.condensed12px}>
            {e2}
          </p>
        ) : e2}
      </div>
    </BCon>
  );
};

const BigKnobs = () => {
  const knobColors = ["Blue", "Green", "White", "Orange"];
  return (
    <div className={classes.knobs}>
      {knobColors.map((color, index) => (
        <div className={classes.knobBlock}>
          <div className={classes.outerKnob}>
            <div className={classes[`knob${color}`]}>
              <div className={classes[`imprint${color}`]}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const Screen = () => (
  <div className={classes.opScreen}>
    <img
      className={classes.opScreenBackground}
      width="268"
      alt="op1-display-background"
      src="https://pizzabreakfast.co/project-assets/web-op-1/op1-display-background.svg"
    />
    <div className={classes.tapeRolls}>
      <img
        className={cx(classes.roll1, classes.rotateCenter)}
        width="60"
        alt="roll-1"
        src="https://pizzabreakfast.co/project-assets/web-op-1/roll-1.svg"
      />
      <img
        className={classes.rotateCenter}
        width="60"
        alt="roll-2"
        src="https://pizzabreakfast.co/project-assets/web-op-1/roll-2.svg"
      />
    </div>
    <img
      className={classes.gloss}
      width="268"
      alt="Display gloss image"
      src="https://pizzabreakfast.co/project-assets/web-op-1/gloss.svg"
    />
  </div>
);

const RightPanel = () => (
  <div className={classes.rightSidePart}>
    <div className={classes.microphoneVuOp1}>
      <div className={classes.micSquare}>
        {[...Array(4)].map(() => (
          <div className={classes.oval4px} />
        ))}
      </div>
      <div className={classes.vuMeter}>
        {[...Array(5)].map((_, index) => (
          <div className={classes.oval4px} />
        ))}
      </div>
      <h1 className={classes.op1Label}>OP-1</h1>
    </div>
  </div>
)

const OP1 = () => {
  return (
    <div className={classes.op1ContainerLayer1}>
      <div className={classes.op1ContainerLayer2}>
        <div className={classes.innerProfile}>
          <div className={classes.darkBackground}>
            <div className={classes.upperPart}>
              <div className={classes.speakerBlock}>
                <div className={classes.speaker}/>
              </div>
              <div className={classes.buttonGroup1}>
                <div className={classes.longButtonBlock}>
                  <div className={classes.volKnob}>
                    <div className={classes.knobDot}/>
                  </div>
                </div>
                <ImageButton
                  width="36"
                  alt="Help button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/help-icon.svg"
                />
                <ImageButton
                  width="36"
                  alt="Tempo button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/tempo-icon.svg"
                />
              </div>

              <Screen />
              <BigKnobs />

              <div className={classes.topRight}>
                <ImageButton
                  width="36"
                  alt="Microphone button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/mic-icon.svg"
                />
                <BCon>
                  <div>
                    <img
                      width="16"
                      alt="Album button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/album-icon.svg"
                    />
                    <p className={classes.condensed10px}>COM</p>
                  </div>
                </BCon>
              </div>
            </div>
            <div className={classes.transportsControlsKeyboard}>
              <div className={classes.transports}>
                <ImageButton
                  width="36"
                  alt="Synthesizer button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/synthesizer-icon.svg"
                />
                <ImageButton
                  width="36"
                  alt="Drum button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/drum-icon.svg"
                />
                <ImageButton
                  width="36"
                  alt="Tape button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/tape-icon.svg"
                />
                <BCon>
                  <div>
                    <img
                      width="16"
                      alt="Lift button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/lift-icon.svg"
                    />
                    <p className={classes.normal10px}>1–4</p>
                  </div>
                </BCon>
                <BCon>
                  <img
                    width="16"
                    alt="Drop button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/drop-icon.svg"
                  />
                  <img
                    width="16"
                    alt="Dot icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/dot-icon.svg"
                  />
                </BCon>
                <BCon>
                  <div>
                    <img
                      width="16"
                      alt="Split button icon"
                      src="https://pizzabreakfast.co/project-assets/web-op-1/split-icon.svg"
                    />
                    <p className={classes.condensed10px}>JOIN</p>
                  </div>
                </BCon>
                <ImageButton
                  width="36"
                  alt="Record button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/record-icon.svg"
                />
                <ImageButton
                  width="24"
                  alt="Play button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/play-icon.svg"
                />
                <ImageButton
                  width="24"
                  alt="Stop button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/stop-icon.svg"
                />
                <ImageButton
                  width="24"
                  alt="Back button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/back-icon.svg"
                />
                <ImageButton
                  width="24"
                  alt="Forward button icon"
                  src="https://pizzabreakfast.co/project-assets/web-op-1/forward-icon.svg"
                />
                <BCon>
                  <p className={classes.p}>Shift</p>
                </BCon>
              </div>

              <div className={classes.controlsKeyboard}>
                <div className={classes.controls}>
                  <ImageButton
                    width="36"
                    alt="Mixer button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/mixer-icon.svg"
                  />
                  {Array.from(Array(4).keys()).map((i) => (
                    <BCon>
                      <p className={classes.light32px}>{i + 1}</p>
                    </BCon>
                  ))}
                  <TwoElemButton
                    e1="1"
                    e2={
                      <p className={cx(classes.condensed12px, classes.green)}>IN</p>
                    }
                  />
                  <TwoElemButton
                    e1="2"
                    e2={
                      <p className={cx(classes.condensed12px, classes.green)}>OUT</p>
                    }
                  />
                  <TwoElemButton
                    e1="3"
                    e2={
                      <img
                        width="24"
                        alt="Loop button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/loop-icon.svg"
                      />
                    }
                  />
                  <TwoElemButton
                    e1="4"
                    e2={
                      <img
                        width="24"
                        alt="Break button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/break-icon.svg"
                      />
                    }
                  />
                  <TwoElemButton
                    e1="5"
                    e2={
                      <p className={cx(classes.normal12px, classes.orange)}>Я</p>
                    }
                  />
                  <TwoElemButton
                    e1="6"
                    e2={
                      <img
                        width="24"
                        alt="Chop button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/chop-icon.svg"
                      />
                    }
                  />
                  <TwoElemButton e1="7" e2="M1" />
                  <TwoElemButton e1="8" e2="M2" />
                  <ImageButton
                    width="36"
                    alt="Sequencer button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/sequencer-icon.svg"
                  />
                </div>
                <Keyboard />
              </div>
            </div>
          </div>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default OP1;
