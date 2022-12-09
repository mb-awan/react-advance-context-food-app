import classes from './MealItem.module.css';

const MealItem = props => {
    const price = props.price.toFixed(2);
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div>${price}</div>
            </div>
            <div>form</div>
        </li>
    );
}

export default MealItem;