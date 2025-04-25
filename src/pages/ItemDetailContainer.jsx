import React, {useEffect, useState} from 'react'
import { fetchDataById } from '../services/fetchData'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetchDataById(id).then(res => {
            setDetail(res)
        })
    },[])
    
    return (
    <div>
        <h2>Producto:{detail.name}</h2>
        <p>{detail.description}</p>
        <h3>Stock:{detail.stock}</h3>
        <h3>Price: ${detail.price}CLP</h3>
        </div>
    )
}

export default ItemDetailContainer
