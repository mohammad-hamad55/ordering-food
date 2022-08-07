import {useDispatch,useSelector} from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

import styles from './ButtonForm.module.css';
const ButtonForm = (props) => {
    const dispatch=useDispatch();
    const isLoading=useSelector(state=>state.form.isLoading);
    const hasError=useSelector(state=>state.form.hasError);
    const cancelCLickHandler = (e) => {
        e.preventDefault();
    
        dispatch(uiSliceActions.backdropApper(false));
      };


    let button;
    if (hasError) {
      button = <p>error</p>;
    } else {
      button = <button type="submit">Confirm</button>;
    }
  return (
    <div className={styles.buttons}>
      <button onClick={cancelCLickHandler}>Cancel</button>
      {isLoading ? <p>loading...</p> : button}
    </div>
  );
};

export default ButtonForm;
