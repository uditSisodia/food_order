import React from "react";

const Cart = (props) => {
  const CartItems = (
    <ul>
      {[{}].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default Cart;
