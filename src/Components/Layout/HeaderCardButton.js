import React from "react";

import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCardButton.module.css";

const HeaderCardButton = (props) => {
  return (
    <button>
      <span className={classes.button}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
