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

const PocketOperator = () => {
  return (
    <div className={classes.container}>
      <div className={classes.body}>
        <div className={classes.operatorText}>
          pocket operator
        </div>
        <div className={classes.lcd}>
        </div>
        <div className={classes.buttonsTop}>
        </div>
        <div className={classes.buttons}>
          {buttonGrid.map((row, i) =>
            <div className={classes.buttonRow}>
              {row.map((cell, i) => (
                <div className={classes.button} key={i}>
                  {cell}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PocketOperator;
