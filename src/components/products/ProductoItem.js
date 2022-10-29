import React, {useContext} from 'react'
import IMG from '../../images/img01.jpg';
import { DataContext } from "../context/Dataprovider";
import { Link } from "react-router-dom";

export const ProductoItem = ({
  id,
  title,
  price,
  image,
  category
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;



  return (
    <div className='producto'>
    <a href='#'>
      <div className='producto__img'>
          <img src={image} alt={title}/>
      </div>
    </a>
    <div className='producto__footer'>
      <h1> {title} </h1>
      <p> {category} </p>
      <p className='price'>${price}</p>
    </div>
    <div className='buttom'>
      <button className='btn' onClick={() => addCarrito(id)}>
        Añadir al carrito
      </button>
      <a href='#' className='btn'>Vista</a>
    </div>
    </div>
  )
}

export default ProductoItem