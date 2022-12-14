import classes from "./Input.module.css";
import {useEffect, useState} from "react";

const Index = props => {
    const {label, input} = props;

    const [enteredAmount, setEnteredAmount] = useState(input.value || 1);
    const changeAmountHandler = e => {
        setEnteredAmount(e.target.value);
    }
    useEffect(()=> {
        props.onSendAmount(enteredAmount);
    }, [enteredAmount, props]);

    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input
                {...input}
                value={enteredAmount}
                onChange={changeAmountHandler}
            />
        </div>
    )
}

export default Index;