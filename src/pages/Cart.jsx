import React from 'react'
import { useGlobalStates } from '../context/Context'
import { Link } from 'react-router'

const Cart = () => {
    const { cart, calcularTotal } = useGlobalStates()

    return (
        <>
        {cart.length === 0 ? (
            <h1>Debe agregar productos al carrito </h1>
        ) : (
            <div>
            {cart.map(prod => (
                <div key={prod.id} className='card'>
                <h3>{prod.name}</h3>
                <h4>${prod.price.toLocaleString('es-CL')}</h4>
                <h4>Cantidad: {prod.quantity}</h4>
                <h3>Subtotal: ${(prod.price * prod.quantity).toLocaleString('es-CL')}</h3>
                </div>
            ))}

            <h2 className='card'>Total: ${calcularTotal.toLocaleString('es-CL')}</h2>
            <Link to='/checkout'><h1>Finalizar compra</h1></Link>
            </div>
        )}
        </>
    )
}

export default Cart