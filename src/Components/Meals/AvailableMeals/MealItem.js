import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import {useContext} from "react";

const MealItem = props => {
    const price = props.price.toFixed(2);
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount
        }
        cartCtx.addItemToCart(item);
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>${price}</div>
            </div>
            <MealItemForm id={props.id} onAddItemToCart={addToCartHandler}/>
        </li>
    );
}

export default MealItem;