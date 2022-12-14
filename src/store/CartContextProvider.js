import CartContext from "./cart-context";
import {useEffect, useState} from "react";

const CartContextProvider = props => {
    const [items, setItems] = useState([]);

    useEffect(()=> {
        console.log(items)
    },[items]);

    const addItemToCartHandler = itemToAdd => {
        const itemAlreadyExists = items.findIndex(item => item.id === itemToAdd.id);
        if(itemAlreadyExists === -1){
            setItems(prevItems => {
                return [...prevItems, itemToAdd];
            });
        }
        else{
            setItems(prevItems => {
                const updatedItems = [...prevItems];
                updatedItems[itemAlreadyExists].amount += Number(itemToAdd.amount);
                return updatedItems;
            })
        }
    };

    const removeItemFromCartHandler = id => {
    };

    const cartValue = {
        items,
        totalAmount: 0,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;