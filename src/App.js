import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemList from './components/shop/ItemList';
import itemDetail from './components/shop/ItemDetail';
import { products } from './components/shop/data/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemCard from './components/shop/ItemCard';
function App() {
  return (
    
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<ItemList/>} />
        <Route path={'/'} element={<itemDetail/>} />
        <Route path={'/'} element={<ItemCard/>} />
        <Route path={'/'} element={<products/>} />
      </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;