import { Fragment } from "react";
import styles from "./InputItem.module.css";
import useValdtion from "../../hooks/useValdtion";

const InputItem = (props) => {
 const [changeHandler,blurHandler,input,inputToutch,valdtionMessge]=useValdtion(props.id);

  return (
    <Fragment>
      <label htmlFor={props.id}>{props.id}</label>
      <input
        type="text"
        id={props.id}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={input}
        className={!props.inputValid && inputToutch ? styles.error : ""}
      />
      {!props.inputValid && inputToutch && <p>{valdtionMessge}</p>}
    </Fragment>
  );
};

export default InputItem;
