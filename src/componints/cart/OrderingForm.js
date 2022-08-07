import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/form-slice";
import { shopingListActions } from "../../store/shoping-list-slice";
import {  cartShopingActions } from "../../store/cart-shoping-slice";
import styles from "./OrderingForm.module.css";
import InputItem from "./InputItem";
import ButtonForm from "./ButtonForm";
const OrderingForm = (props) => {
  const dispatch = useDispatch();
  const myShopingList = useSelector((state) => state.shopingList.myShopingList);
  const myInputs = useSelector((state) => state.form);

  const nameValid = myInputs.name.trim() !== "";
  const streetValid = myInputs.street.trim() !== "";
  const postalValid =
    myInputs.postal.trim() !== "" &&
    myInputs.postal.length === 4 &&
    !isNaN(+myInputs.postal);
  const cityValid = myInputs.city.trim() !== "";

  const formValid = nameValid && streetValid && cityValid && postalValid;

  async function sendData(info) {
    try {
      dispatch(formActions.changeLoading(true));
      props.submitingHandler(true);
      const res = await fetch(
        "some url",
        {
          method: "POST",
          body: JSON.stringify({ ...info, myElments: myShopingList }),
          headers: { "contint-type": "application/json" },
        }
      );

      if (!res.ok) {
        throw new Error("rong");
      }
    } catch (error) {
      dispatch(formActions.changeError(error.message));
    }
    dispatch(shopingListActions.clearShopingList());
    dispatch(formActions.changeLoading(false));
    props.submitingHandler(false);
    props.submitedHandler(true);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(formActions.changeInputtoutchs(true));
    if (!formValid) {
      return;
    }
    sendData({
      name: myInputs.name,
      street: myInputs.street,
      postal: myInputs.postal,
      city: myInputs.city,
    });

    dispatch(formActions.changeInputtoutchs(false));
    dispatch(formActions.clearInputs());
    dispatch(cartShopingActions.clearAmount());
    props.onChangeOrderMode(false);
    props.submitedHandler(false);
  };

  return (
    <form className={styles.myForm} onSubmit={submitHandler}>
      <div className={styles.inputss}>
        <InputItem id="Your Name" inputValid={nameValid}></InputItem>
        <InputItem id="Street" inputValid={streetValid}></InputItem>
        <InputItem id="Postal Code" inputValid={postalValid}></InputItem>
        <InputItem id="City" inputValid={cityValid}></InputItem>
      </div>
      <ButtonForm />
    </form>
  );
};

export default OrderingForm;
