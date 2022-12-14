import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";
import {useRef} from "react";

const MealItemForm = props => {
    const amountEnteredRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        const amount = +amountEnteredRef.current.value;

        props.onAddToCart(amount);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref= {amountEnteredRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealItemForm;