import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartSate = {
   items: [],
   totalAmount: 0,
}

const cartReducer = (state, action) => {
   if (action.type === 'ADD') {
      const updateItems = state.items.concat(action.item);
      const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

      return {
         items: updateItems,
         totalAmount: updateTotalAmount
      };
   }

   return defaultCartSate;
};

const CartProvider = (props) => {

   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartSate);

   const addItemFromCartHandler = (item) => {
      dispatchCartAction({ type: 'ADD', item: item })
   }

   const removeItemFromCartHandler = (id) => {
      dispatchCartAction({ type: 'REMOVE', id: id })
   }

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemFromCartHandler,
      removeItem: removeItemFromCartHandler
   }

   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   )
}

export default CartProvider;