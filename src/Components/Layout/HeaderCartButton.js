import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const totalCartItems = cartCtx.items.reduce((cartTotal, item)=> {
        return cartTotal+item.amount;
    }, 0);

    const [newItemAddedToCart, setNewItemAddedToCart] = useState(false);
    const btnClasses = `${classes.button} ${newItemAddedToCart && classes.bump}`

    useEffect(()=> {
        if(cartCtx.items.length === 0) return;
        setNewItemAddedToCart(true);

        const timer = setTimeout(()=> {
            setNewItemAddedToCart(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {totalCartItems}
        </span>
    </button>
}

export default HeaderCartButton;