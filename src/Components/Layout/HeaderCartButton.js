import classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const totalItemsInCart = cartCtx.items.reduce((total, item)=> {
        console.log(item.amount);
        return total + Number(item.amount);
    }, 0)
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {totalItemsInCart}
        </span>
    </button>
}

export default HeaderCartButton;