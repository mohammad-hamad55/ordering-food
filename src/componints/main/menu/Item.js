import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import styles from "./Item.module.css";
import {uiSliceActions} from '../../../store/ui-slice';
import {cartShopingActions} from '../../../store/cart-shoping-slice';
import {shopingListActions} from '../../../store/shoping-list-slice';
const Item=(props)=>{
    const dispatch=useDispatch();
    const [inputValue,setMyInpValue]=useState("1");
    useEffect(()=>{
         setTimeout(()=>{

         
             dispatch(uiSliceActions.trigerAnimation(false));
         },500)
    })
    const inputHandler=(e)=>{
        setMyInpValue(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(uiSliceActions.trigerAnimation(true));
     dispatch(cartShopingActions.updateAmount(inputValue))
     
      dispatch(shopingListActions.shopingListHandler({
          id:props.id,
          name:props.name,
          price:props.price,
          miniCounter:inputValue
      }))
    }
    return(
        <div className={styles.contener}>
            <h3>{props.name}</h3>
            <p>{props.des}</p>
            <span>${props.price}</span>
            <form className={styles.myform} onSubmit={submitHandler}>
                <label>Amount</label>
                <input type="number" min="1" onChange={inputHandler} value={inputValue}></input>
                <button type="submit">+ Add</button>
            </form>
        </div>
    )
}

export default Item;