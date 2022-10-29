import React, {useContext} from 'react'
import { DataContext } from '../context/Dataprovider';
import { ProductoItem } from "./ProductoItem";
import { Carrito } from "../Carrito/Carrito";

export const Products = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  return (
    <>
    <h1 className='title'>PRODUCTOS</h1>
    <Carrito/>
        <div className='productos'>
          {
            productos.map(producto=>(
              <ProductoItem key={producto.id}
              id={producto.id}
              title={producto.title}
              price={producto.price}
              image={producto.image}
              category={producto.category}
              cantidad={producto.cantidad}
              
              />
            ))
          }
         
      
        </div>
    </>
  )
}

export default {Products}