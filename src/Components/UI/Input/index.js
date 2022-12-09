import classes from "./Input.module.css";

const Index = props => {
    const {label, input} = props;
    return (
        <div className={classes.input}>
            <label htmlFor={props.name}>{label}</label>
            <input
                {...input}
            />
        </div>
    )
}

export default Index;