import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItemToCart: item => {},
    addItemToCartById: id => {},
    removeItemFromCart: id => {}
});

export default CartContext;