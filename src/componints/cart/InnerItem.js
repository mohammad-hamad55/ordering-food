import React from "react";
import { useDispatch } from "react-redux";
import styles from "./InnerItem.module.css";
import { cartShopingActions } from "../../store/cart-shoping-slice";
import { shopingListActions } from "../../store/shoping-list-slice";

const InnerItem = (props) => {
  const dispatch = useDispatch();
  const addClickHandler = () => {
    dispatch(shopingListActions.updateTheOverLay({ sign: "+", id: props.id }));

    dispatch(cartShopingActions.decrementAmount("+"));
  };
  const subClickHandler = () => {
    if (props.miniCounter === 1 || props.miniCounter === "1") {
      dispatch(shopingListActions.removeElFromOverLay(props.id));
      dispatch(cartShopingActions.decrementAmount());
    } else {
      dispatch(
        shopingListActions.updateTheOverLay({ sign: "-", id: props.id })
      );

      dispatch(cartShopingActions.decrementAmount("-"));
    }
  };
  return (
    <div className={styles.contener}>
      <h3>{props.name}</h3>
      <span>${+props.price * +props.miniCounter}</span>
      <span>
        x<span>{props.miniCounter}</span>
      </span>
      <div className={styles.buttons}>
        <button onClick={subClickHandler}>-</button>
        <button onClick={addClickHandler}>+</button>
      </div>
    </div>
  );
};
export default InnerItem;
