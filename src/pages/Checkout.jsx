import { useEffect, useState } from 'react'
import { useGlobalStates } from '../context/Context'
import { createOrder } from '../services/firebaseServices'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const Checkout = () => {
    const { cart, setCart, calcularTotal } = useGlobalStates()

    const [user, setUser] = useState({
        name: '',
        email: '',
        tel: '',
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (cart.length === 0) {
        navigate('/')
        }
    }, [cart])

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        let hasError = false

        if (user.name.trim().length < 5) {
        hasError = true
        }

        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!regexEmail.test(user.email)) {
        hasError = true
        }

        let regexTel = /^[0-9]{8,}$/;
        if (!regexTel.test(user.tel)) {
        hasError = true
        }

        if (hasError) {
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Por favor, revise los datos ingresados.',
        })
        return
        }

        const newOrder = {
        buyer: user,
        total: calcularTotal,
        items: cart,
        date: new Date(),
        }

        createOrder(newOrder)
        .then(res => {
            Swal.fire({
            title: 'Compra finalizada!',
            text: `Tu orden de compra es: ${res.id}`,
            icon: 'success',
            });
            setCart([])
            navigate('/');
        })
        .catch(err => {
            console.error(err);
            Swal.fire({
            icon: 'error',
            title: 'Ocurrió un error',
            text: 'No se pudo procesar la orden. Intenta más tarde.',
            });
        });
    }


    return (
        <div className='card'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Nombre</label>
            <input type='text' id='name' name='name' onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' onChange={handleChange} />

            <label htmlFor='tel'>Teléfono</label>
            <input type='text' id='tel' name='tel' onChange={handleChange} />

            <button type='submit'>Enviar</button>
        </form>
        </div>
    )
}

export default Checkout
