import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from './data/products'
import { useEffect } from 'react'
import ItemCard from './ItemCard'

const ItemDetail = () => {

    const { id: itemId } = useParams()
    const [item, setItem] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getItemDetails().then( response => {
            setItem( response )
            setloading(false)
        })
    }, [])
    

    const getItemDetails = () => { 
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products.find( p => p.id ===  Number(itemId) ))
            }, 1000);
        })
    }

  return (
    <>
    {!loading && 
        <div className='m-3'>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.price}</div>
        </div>
    }
    </>
  )
}

export default ItemDetail