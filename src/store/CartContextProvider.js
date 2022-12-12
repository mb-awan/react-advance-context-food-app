import CartContext from "./cart-context";
import {useState} from "react";

const CartContextProvider = props => {
    const [items, setItems] = useState([]);
    const addItemToCartHandler = item => {
        setItems(prevItems => {
            return [...prevItems, item];
        });
    };
    const removeItemFromCartHandler = id => {};

    const cartValue = {
        items,
        totalAmount: 0,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;