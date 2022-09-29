import React from 'react'
import { useReducer } from 'react'
import CartContext from './Cart-Context'

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount,
        };
    }
    
    return defaultCartState;
};

function CartProvider(props) {

    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

    const AddItemToCartHandle = (item) => {
        dispatchCartState({type: "ADD", item:item});
        
    };

    const removeItemFromCartHandler = (id) =>{
        dispatchCartState({type: "REMOVE", id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: AddItemToCartHandle,
        removeItem: removeItemFromCartHandler,
    };
  return (
    <CartContext.Provider value = {cartContext}>
    {props.children}
</CartContext.Provider>
  );
};

export default CartProvider