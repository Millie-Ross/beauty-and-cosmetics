import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Mpesa from './components/Mpesa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import SearchBar from './components/Searchbar';
import BackToTopButton from './components/BackToTopButton';
import Logout from './components/Logout';
import Checkout from './components/Checkout';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <header className="App-header">
        <h1>Liberty Library</h1>
      </header>
      <Navbar/>
      </>
      
      
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/getproduct' element={<Getproduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
        <Route path='/cartcontext' element={<CartProvider/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/searchbar' element={<SearchBar/>}/>
        <Route path='/backtotopbutton' element={<BackToTopButton/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        
      </Routes>






    </div>
    </BrowserRouter>
  );
}

export default App;
