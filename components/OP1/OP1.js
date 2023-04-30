import classes from './op1.module.scss';

const cx = (...args) => args.join(' ');

const ImageButton = ({ width, alt, src } = { width: "24", alt: "alt" }) => (
  <div className={classes.buttonBlock}>
    <div className={classes.button}>
      <img
        width={width}
        alt={alt}
        src={src}
      />
    </div>
  </div>
);

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
    <div class="microphone-vu-op1">
      <img
        width="16"
        alt="Inbuilt microphone image"
        src="https://pizzabreakfast.co/project-assets/web-op-1/microphone.svg"
      />
      <div class="vu-meter">
        {[...Array(5)].map((_, index) => (
          <div className={classes.oval4px} />
        ))}
      </div>
      <h1 className={classes.op1Label}>OP-1</h1>
    </div>
  </div>
)

const Keyboard = () => {
  return (
    <div className={classes.keyboard}>
      {Array.from(4).map(( i ) => (
        <div className={classes[`blackKeys${i + 1}`]}>
          <div className={classes.blackKeyBlockLong}>
            <div className={classes.blackKeyRight}/>
          </div>
          <div className={classes.blackKeyBlockShort}>
            <div className={classes.blackKey} />
          </div>
          <div className={classes.blackKeyBlockLong}>
            <div className={classes.blackKeyLeft} />
          </div>
        </div>
      ))}
      {Array.from(8).map(( i ) => (
        <div className={classes[`whiteKeys${i + 1}`]}>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey}/>
          </div>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey}/>
          </div>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey} />
          </div>
          <div className={classes.whiteKeyBlock}>
            <div className={classes.whiteKey} />
          </div>
        </div>
      ))}
    </div>
  );
}

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

              <div class="top-right">
                <div class="button-block">
                  <div class="button">
                    <div>
                      <img
                        width="16"
                        alt="Album button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/album-icon.svg"
                      />
                      <p class="condensed-10px">COM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="transports-controls-keyboard">
              <div class="transports">
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
                <div class="button-block">
                  <div class="button">
                    <div>
                      <img
                        width="16"
                        alt="Lift button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/lift-icon.svg"
                      />
                      <p class="normal-10px">1–4</p>
                    </div>
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
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
                  </div>
                </div>
                <div class="button-block">
                  <div class="button">
                    <div>
                      <img
                        width="16"
                        alt="Split button icon"
                        src="https://pizzabreakfast.co/project-assets/web-op-1/split-icon.svg"
                      />
                      <p class="condensed-10px">JOIN</p>
                    </div>
                  </div>
                </div>
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
                <div class="button-block">
                  <div class="button"><p>Shift</p></div>
                </div>
              </div>

              <div class="controls-keyboard">
                <div class="controls">
                  <ImageButton
                    width="36"
                    alt="Mixer button icon"
                    src="https://pizzabreakfast.co/project-assets/web-op-1/mixer-icon.svg"
                  />
                  {Array.from(Array(4).keys()).map((i) => (
                    <div class="button-block">
                      <div class="button">
                        <p className={light32px}>{i + 1}</p>
                      </div>
                    </div>
                  ))}
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">1</p>
                        <p class="condensed-12px green">IN</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">2</p>
                        <p class="condensed-12px green">OUT</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">3</p>
                        <img
                          width="24"
                          alt="Loop button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/loop-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">4</p>
                        <img
                          width="24"
                          alt="Break button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/break-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">5</p>
                        <p class="normal-12px orange">Я</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">6</p>
                        <img
                          width="24"
                          alt="Chop button icon"
                          src="https://pizzabreakfast.co/project-assets/web-op-1/chop-icon.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">7</p>
                        <p class="condensed-12px">M1</p>
                      </div>
                    </div>
                  </div>
                  <div class="button-block">
                    <div class="button">
                      <div class="buttons-two-elements">
                        <p class="normal-18px">8</p>
                        <p class="condensed-12px">M2</p>
                      </div>
                    </div>
                  </div>
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
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default OP1;
