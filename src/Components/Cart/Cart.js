import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const itemsInCartExists = cartCtx.items.length > 0;
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const addToCartItemHandler = item => {
        cartCtx.addItemToCart({...item, amount: 1});
    }
    const removeFromCartItemHandler = id => {
        cartCtx.removeItemFromCart(id);
    }

    const cartItems =
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onAdd={addToCartItemHandler.bind(null,item)}
                    onRemove={removeFromCartItemHandler.bind(null,item.id)}
                />)}
        </ul>;

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {itemsInCartExists && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;