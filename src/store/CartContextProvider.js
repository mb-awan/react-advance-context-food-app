import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCart = {
    items: [],
    totalAmount: 0
};

const cartReducer = (prevState, action) => {
    if(action.type === 'ADD'){
        let updatedItems;

        const alreadyExistingItemIndex = prevState.items.findIndex(
            item => item.id === action.item.id)

        if(alreadyExistingItemIndex !== -1){
            updatedItems = [...prevState.items];
            const prevAmount = updatedItems[alreadyExistingItemIndex].amount;
            updatedItems[alreadyExistingItemIndex] = {
                ...action.item,
                amount: prevAmount + action.item.amount
            }
        }
        else {
            updatedItems = prevState.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: prevState.totalAmount + (action.item.amount * action.item.price)
        }
    }
    else if(action.type === 'REMOVE'){
        //Logic to remove
    }
    return defaultCart;
}

const CartContextProvider = props => {
    const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);

    const addItemToCartHandler = item => {
        dispatchCart({type: "ADD", item});
    };
    const removeItemFromCartHandler = id => {
        dispatchCart({type: "REMOVE", id});
    };

    const cartValue = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider;