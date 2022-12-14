import React from 'react'
import { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../Store/Cart-Context'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const numberOfcartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0)
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfcartItems}</span>
    </button>
  )
}

export default HeaderCartButton