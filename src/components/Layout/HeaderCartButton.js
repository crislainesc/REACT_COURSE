import React, {useContext} from "react";

import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
   const cartContext = useContext(CartContext);

   const numberOfCartItens = cartContext.items.reduce((currentNumber, item) => {
      return currentNumber + item.amount
   }, 0);

   return (
      <button className={classes.button} onClick={props.onClick}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={classes.badge}>
            {numberOfCartItens}
         </span>
      </button>
   );
};

export default HeaderCartButton;