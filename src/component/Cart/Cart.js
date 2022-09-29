import React from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";

function Cart(props) {
  const cartItem = (
    // <ul className={classes["cart-item"]}>
    <ul className={classes.sss}>
      {[{ id: "c1", 
      name: "Sushi", 
      amount: 2, 
      price: 12.99 }].map((item) => (
        <li className={classes.ssss}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.61</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
}

export default Cart;
