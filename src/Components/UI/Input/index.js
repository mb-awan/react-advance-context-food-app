import classes from "./Input.module.css";
import {forwardRef} from "react";

const Index = forwardRef((props, ref) => {
    const {label, input} = props;
    return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input
                ref={ref}
                {...input}
            />
        </div>
    )
});

export default Index;