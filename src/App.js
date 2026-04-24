import logo from './logo.svg';
import './App.css';
import SignUp from './componenets/SignUp';
import SignIn from './componenets/SignIn';
import Addproduct from './componenets/Addproduct';
import Getproduct from './componenets/Getproduct';
import Mpesa from './componenets/Mpesa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './componenets/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Liberty Library</h1>
      </header>
      <Navbar/>
      
      
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/getproduct' element={<Getproduct/>}/>
        <Route path='/mpesa' element={<Mpesa/>}/>

      </Routes>






    </div>
    </BrowserRouter>
  );
}

export default App;
