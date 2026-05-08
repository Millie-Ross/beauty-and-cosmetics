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

import React, { useState, useEffect } from 'react';



console.log("Addproduct:", Addproduct);



function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <--- New loading state
    const handleLogin = (userData) => {
    setUser(userData);
};

 useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        setUser(JSON.parse(savedUser));
    }
    setLoading(false);
}, []);
  return (
    <BrowserRouter>
    <div className="App">
      <>
      <header className="App-header">
        <h1>Liberty Library</h1>
      </header>
      <Navbar user={user}/>
      </>
      
      
      <Routes>
        {/* Pass both user and loading to the route */}
     
        <Route path='/signup' element={<SignUp/>}/>
       <Route path='/' element={<SignIn onLogin={handleLogin} />} />
        
        <Route path='/getproduct' element={<Getproduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>
        <Route path='/cartcontext' element={<CartProvider/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/searchbar' element={<SearchBar/>}/>
        <Route path='/backtotopbutton' element={<BackToTopButton/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/addproduct" element={<Addproduct/>} />
       
        
      </Routes>






    </div>
    </BrowserRouter>
  );
}

export default App;
