import React from 'react'
import { Link } from 'react-router'

const Item = ({ item }) => {
    return (
        <div className='card'>
        <img src={item.image}></img>
        <h3>{item.name}</h3>
        <h4>Precio: ${item.price.toLocaleString('es-CL')}</h4>
        <Link to={'/item/' + item.id}>Ver detalle</Link>
        </div>
    )
}

export default Item