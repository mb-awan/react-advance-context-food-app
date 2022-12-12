import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart/Cart";
import {useState} from "react";


function App() {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }
    return (
        <>
            {showCart && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <Meals/>
        </>
    );
}

export default App;
