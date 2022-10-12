import { products } from './data/products'
import React, {useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import ItemCard from './ItemCard'
const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems(response)
    })
  }, [])
  
  const getProducts = () => { 
      const prom = new Promise( resolve => {
        setTimeout(() => {
          resolve( products )
        }, 3000);
      } )
   }

  return (
    <>
      <div>Deco Dreams Tienda</div>
      {items.map( i => <ItemCard key={i.id} {...i} />)}
    </>
    
  )
}

export default ItemList