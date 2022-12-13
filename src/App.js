import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals";
import Cart from "./Components/Cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";


function App() {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    }

    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
        <CartContextProvider>
            {showCart && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <Meals/>
        </CartContextProvider>
    );
}

export default App;
