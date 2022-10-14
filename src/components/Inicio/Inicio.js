import React from 'react'
import { Link } from 'react-router-dom'
import Nike from '../../images/Nike.jpg'
import IMG from '../../images/img01.jpg';
import imgInicio from '../../images/inicio.jpg';

const Inicio = () => {
    return (
        <>
        <h1 className='title'>PRODUCTOS</h1>
        <div className='productos'>
          <div className='producto'>
          <a href='#'>
            <div className='img__inicio'>
                <img src={imgInicio} alt=''/>
            </div>
          </a>
          <div className='producto__footer'>
            <h1> Welcome to the SneakerStore </h1>
            <p> HypeBeast</p>
            
          </div>
          <div className='buttom'>
          </div>
          </div>
        </div>
        </>
      )
}

export default Inicio