import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Products} from './components/products/Products';
import {Header} from './components/Header/Header';
import 'boxicons';
import Inicio from './components/Inicio/Inicio';

function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Header/>
        {/* <Products/>  */}
        <Routes>
          <Route path='/Inicio' element={<Inicio/>}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;