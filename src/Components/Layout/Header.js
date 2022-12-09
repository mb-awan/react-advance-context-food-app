import classes from './Header.module.css';
import meals from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Your Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt='Table full of food'/>
            </div>
        </>
    )

}

export default Header;