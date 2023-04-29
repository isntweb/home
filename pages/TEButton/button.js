import classes from './button.module.scss';

const Button = ({ label }) => {
  return (
    <div className={classes.toggle}>
      <input type="checkbox" checked className={classes.input} />
      <span className={classes.button}></span>
      <span className={classes.label}>{label ?? '-'}</span>
    </div>
  );
}

export default Button;
