import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const [cartItems, setCartItems] = useState(cartCtx.items);
    const [cartTotalPrice, setCartTotalPrice] = useState(0);

    useEffect(()=> {
        setCartItems(cartCtx.items);
        setCartTotalPrice(()=> {
            return cartItems.reduce((total, item)=> {
                return total + (Number(item.price) * Number(item.amount));
            },0)
        })
    }, cartCtx.items);

    return <Modal onClose={props.onClose}>
        <ul className={classes['cart-items']}>
            {cartItems.map(item =>
                <li key={item.id}>
                    <h4>{item.name}</h4>
                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <div style={{width: '10%', display: "flex", justifyContent: 'space-between'}}>
                            <span>{item.price}</span>
                            <span>x {item.amount}</span>
                        </div>
                        <div>
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </div>
                    <hr/>
                </li>)
            }
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartTotalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;