import {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Counter from '../components/Counter'
import { useGlobalStates } from '../context/Context'
import Loader from '../components/Loader'
import { getProductById } from '../services/firebaseServices'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [counter, setCounter] = useState(0)
    const [added, setAdded] = useState(false)
    const {cart, setCart, loading, setLoading} = useGlobalStates()
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(id).then(res => {
            setDetail(res)
            setLoading(false)
        })
    },[id])

    const addCart = () => {
        setCart([...cart, {...detail, quantity: counter, id: detail.id}])
        setAdded(true)
    }
    
    return (
    <div>
        {loading ? (
            <Loader />
        ) : (
            <>
                <img src={detail.image} alt='' width={300}/>
                <h2>Producto:{detail.name}</h2>
                <p>{detail.description}</p>
                <h3>Stock:{detail.stock}</h3>
                <h3> Price: {typeof detail.price === 'number' ? `$${detail.price.toLocaleString('es-CL')} CLP` : 'Precio no disponible'}</h3>
            
            {added ? (
                <Link to="/cart">
                    <button>Ir al carrito 🛒</button>
                </Link>
            ) : (
                <>
            <Counter
                stock={detail.stock}
                counter={counter}
                setCounter={setCounter}
            />
                    <button onClick={addCart} disabled={counter === 0}>
                        Agregar al carrito 🛒
                    </button>
                </>
            )}
            </>
          )}
        </div>
      )
    }
    
    export default ItemDetailContainer
