import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {useState} from "react";

const MealItemForm = props => {
    const [amount, setAmount] = useState(1);

    const addToCartHandler = () => {
        props.onAddItemToCart(Number(amount));
    }

    const amountChangeHandler = selectedAmount => {
        setAmount(selectedAmount);
    }

    return (
        <div className={classes.form}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                }}
                onSendAmount={amountChangeHandler}
            />
            <button onClick={addToCartHandler}>+ Add</button>
        </div>
    )
}

export default MealItemForm;