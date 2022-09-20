import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
function App() {
  return (
    
    <>
    <NavBar />
    
    
    <h1 className=' title text-3xl font-bold underline'>Best Lyrics ever!</h1>
    <section className='title'><ItemListContainer/></section>
    
    </>
  );
}

export default App;