import React, { useEffect, useState } from 'react'
import { fetchData } from '../services/fetchData'
import ItemList from "../components/ItemListContainer/ItemList"

const ItemListContainer = () => {
    const [list, setList] = useState([])
                
        useEffect(() => {
            fetchData().then(res => {
                setList(res)
            })
        }, [])

        return (
            <div>
                <ItemList list={list} />
            </div>
            )
        }

export default ItemListContainer
