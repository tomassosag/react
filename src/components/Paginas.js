import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import {Carrito} from './Carrito/Carrito';
import { Inicio } from "./Inicio/Inicio";
import { Products } from "./products/Products"


export const Paginas = () => {
  return (
    <section>
        
            <Route path="/Inicio" exact component={Inicio}/>
            <Route path="/Products" exact component={Products} />
            <Route path="/Carrito" exact component={Carrito} />
    </section>
  )
}

export default {Paginas}