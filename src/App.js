import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Products} from './components/products/Products';
import {Header} from './components/Header/Header';
import 'boxicons';
import Inicio from './components/Inicio/Inicio';
import { Paginas } from "./components/Paginas";
import { DataProvider } from "./components/context/Dataprovider";
import { Carrito } from "./components/Carrito/Carrito";



function App() {
  return (
    <DataProvider>
    <div className='App'>

      <BrowserRouter>
      <Header/>
      
        {/* <Products/>  */}
        <Routes>
          
          <Route path='/Inicio' element={<Inicio/>}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Carrito' element={<Carrito/>}></Route>
          <Route path='/Paginas' element={<Paginas/>}></Route>

          
        </Routes>
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;