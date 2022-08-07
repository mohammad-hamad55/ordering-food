import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {uiSliceActions} from '../../store/ui-slice';

import styles from "./Cart.module.css";
const Cart=(props)=>{
    const dispatch=useDispatch();
    const animationVald=useSelector(state=>state.ui.animationVald)
    const amount=useSelector(state=>state.cartShoping.amount)
    const cartClickHandler=()=>{
        dispatch(uiSliceActions.backdropApper(true));
       
   
    }
    const cartStyle=animationVald?styles.cartpls:styles.cart;
     
    return(
        <div className={cartStyle} onClick={cartClickHandler}>
            your cart
            <span className={styles.counter}>{amount}</span>
        </div>
    )
}

export default Cart;