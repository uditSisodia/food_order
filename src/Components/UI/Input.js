import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input htmlFor={props.input.id} {...props.input}></input>
    </div>
  );
};

export default Input;
