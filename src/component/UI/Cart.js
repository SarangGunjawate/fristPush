import React from 'react'
import classes from './Cart.module.css'

function Cart(props) {
  return <div className={classes.cart}>{props.children}</div>
}

export default Cart;  