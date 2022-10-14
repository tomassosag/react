import React from 'react'
import { Link } from 'react-router-dom'
import Nike from '../../images/Nike.jpg'


const Header = () => {
  return (
    <header>
        <a href='#'>
            <div className='logo'>
                <img src={Nike} alt='logo' width={150} ></img>
            </div>
        </a>
        <ul>
            <li>
                <Link to={'/Inicio'} className='btn btn-ghost normal-case text-xl'>INICIO</Link>
            </li>
            <li>
                <Link to={'/Products'} className='btn btn-ghost normal-case text-xl'>PRODUCTOS</Link>
            </li>
            <div className='cart'>
                <box-icon name='cart'></box-icon>
                <span className='item__total'>0</span>
            </div>
        </ul>
    </header>
  )
}

export {Header}