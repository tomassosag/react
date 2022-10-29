import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Data from '../../Data';
import Nike from '../../images/Nike.jpg'
import { DataContext } from "../context/Dataprovider";


const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito

    console.log(menu)

    const toogleMenu = () =>{
        setMenu(!menu)
    }


  return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src={Nike} alt='logo' width={150} ></img>
            </div>
        </Link>
        <ul>
            <li>
                <Link to={'/Inicio'} className='btn btn-ghost normal-case text-xl'>INICIO</Link>
            </li>
            <li>
                <Link to={'/Products'} className='btn btn-ghost normal-case text-xl'>PRODUCTOS</Link>
            </li>
            <div className='cart' onClick={toogleMenu}>
                <box-icon name='cart'></box-icon>
                <span className='item__total'>{carrito.length}</span>
            </div>
        </ul>
    </header>
  )
}

export {Header}