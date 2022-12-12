import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Cart from "../Cart/Cart";

const Meals = props => {
    return <>
        <MealsSummary/>
        <AvailableMeals/>
        <Cart/>
    </>
}

export default Meals;