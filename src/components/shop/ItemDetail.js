import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'
import { useEffect } from 'react'


const itemDetail = () => {

    const { id: itemId } = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        getItemDetails().then( response => {
            setItem( response )
        })
    }, [])
    

    const getItemDetails = () => { 
       return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find( p => p.id ===  Number(itemId) ))
            }, 1000);
        })
    }

  return (
    <div className='m-5'>
    <div>{item.id}</div>
    <div>{item.name}</div>
    <div>{item.price}</div>
    </div>
    
  )
}

export default itemDetail