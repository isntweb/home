import { useState, useEffect } from 'react';

import Button from './TEButton';
import Knob from './TEKnob';
import LCD from './LCD';

import { useAnimate } from '../../hooks';
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


const PocketOperator = ({ innerRef }) => {
  return (
    <div className={classes.container} ref={innerRef}>
      <div className={classes.body}>
        <div className={classes.leftCutout}>
          JAM
        </div>
        <div className={classes.operatorText}>
          pocket operator
        </div>
        <div className={classes.rightCutout}></div>
        <LCD />
        <div className={classes.buttonsTop}>
          {controlButtons.map((name, index) => {
            const Component = [3, 4].includes(index) ? Knob : Button;
            return (
              <Component key={name} name={name}/>
            );
          })}
        </div>
        <div className={classes.buttons}>
          {buttonGrid.map((row, i) =>
            <div className={classes.buttonRow} key={`button-row-${i}`}>
              {row.map((cell, j) => (
                <Button label={cell} key={`button-cell-${i}-${j}`}/>
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
