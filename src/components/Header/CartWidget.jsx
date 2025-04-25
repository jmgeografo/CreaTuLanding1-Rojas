import React, {useState} from "react"

const CartWidget = () => {

    const [cart, setCart] = useState(0)

    return (
        <div className="cart-widget">
        <button onClick ={() => setCart(cart - 1)}>-</button>
        🛒 <span>{cart}</span>
        <button onClick ={() => setCart(cart + 1)}>+</button>
        </div>
    );
};
    
export default CartWidget

