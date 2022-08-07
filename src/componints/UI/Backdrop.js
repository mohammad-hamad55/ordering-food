import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {uiSliceActions} from '../../store/ui-slice';
import styles from "./Backdrop.module.css";
import InnerItem from "../cart/InnerItem";
import OrderingForm from "../cart/OrderingForm";
const Backdrop = (props) => {
    const dispatch=useDispatch();
    const myShopingList=useSelector(state=>state.shopingList.myShopingList);
    const apperBack=useSelector(state=>state.ui.apperBack);
  const [orderingMode, setOrdering] = useState(false);
  const [isSubmiting, setSubmiting] = useState(false);
  const [submited, setSubmited] = useState(false);
  const submitingHandler = (activity) => {
    setSubmiting(activity);
  };
  const submitedHandler = (activity) => {
    setSubmited(activity);
  };
  const closeClickHandler = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    
    dispatch(uiSliceActions.backdropApper(false));
    submitedHandler(false);
  };
  const changrOrderMode = (value) => {
    setOrdering(value);
  };

  const orderClickHandler=()=>{
    changrOrderMode(true);
  }
  const myTotal = myShopingList.reduce((toatal, el) => {
    return toatal + +el.price * +el.miniCounter;
  }, 0);

  const backdropStyle = apperBack
    ? styles.backdroppls
    : styles.backdrop;
  let myMainContent;

  if (!submited) {
    myMainContent = (
      <div className={styles.overlay}>
        {myShopingList.map((el) => {
          return (
            <InnerItem
              name={el.name}
              key={el.id}
              id={el.id}
              price={el.price}
              miniCounter={el.miniCounter}
            ></InnerItem>
          );
        })}
        <div className={styles.controls}>
          <h3>total amount</h3>
          <span>${myTotal}</span>
          <div className={orderingMode ? styles.form : styles.buttons}>
            {orderingMode ? (
              <OrderingForm
                submitedHandler={submitedHandler}
                submitingHandler={submitingHandler}
                onChangeOrderMode={changrOrderMode}
              ></OrderingForm>
            ) : (
              <React.Fragment>
                <button onClick={closeClickHandler}>close</button>
                <button onClick={orderClickHandler}>order</button>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    myMainContent = (
      <div className={styles.sucsess}>the order has been sent sucsessfuly</div>
    );
  }
  const lodingDiv = <div className={styles.sucsess}>loading...</div>;
  return (
    <div className={backdropStyle} onClick={closeClickHandler}>
      {isSubmiting ? lodingDiv : myMainContent}
    </div>
  );
};

export default Backdrop;
