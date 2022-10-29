import React from 'react'
import { Link } from 'react-router-dom'
import Nike from '../../images/Nike.jpg'
import IMG from '../../images/img01.jpg';
import Portada from '../../images/inicio.jpg';
import { Carrito } from "../Carrito/Carrito";
import {  } from "../products/Products";

export const Inicio = () => {
    return (
        <>
        <Carrito/>
        <div className='inicio'> 
          <Link to="/Inicio">
            <h1 className='titleInicio'>Inicio</h1>
          </Link>
          <Link to="/Products">
            <h1 className='titleInicio'>Productos</h1>
          </Link>
          <img src={Portada} alt="inicio"></img>
        </div>
        </>
      )
}

export default Inicio