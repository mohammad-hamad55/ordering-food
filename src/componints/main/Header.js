import React from "react";
import styles from "./Header.module.css";
import Cart from "../cart/Cart";
const Header = (props) => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.meals}>react meals</h1>
      <Cart></Cart>
    </div>
  );
};

export default Header;
