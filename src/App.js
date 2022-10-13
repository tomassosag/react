import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemList from './components/shop/ItemList';
import itemDetail from './components/shop/ItemDetail';
import { Products } from './components/shop/data/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCard from './components/shop/ItemCard';
function App() {
  return (
    
    <>
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path={'/ItemList'} element={<ItemList/>} />
        <Route path={'/ItemDetail'} element={<itemDetail/>} />
        <Route path={'/ItemCard'} element={<ItemCard/>} />
        <Route path={'/products'} element={<Products/>} />
      </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;