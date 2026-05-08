import React from 'react'
import SearchBar from './Searchbar';
import { useNavigate } from 'react-router-dom';


import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
    const user1 =JSON.parse(localStorage.getItem("user"))

 
    

    const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('user');

    
    navigate('/');
  };
    
    
  return (
    
    <div className='row g-0'>
        <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand text-warning'>Liberty Library</Link>

                    <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarnav">
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbarnav'>
                        <div className="navbar-nav me-auto">
                            <div className="nav-item">
                                {user1?.role==='admin' && (
                                    <button className='nav-link' onClick={()=>navigate("/addproduct")}>Add Books</button>
                                )}
                                {/* {user && user.role==='admin'?(
                                <Link to='/addproduct' className='nav-link'>Add Books</Link>
                                ):null} */}
                            </div>
                            <div className='nav-item'>
                                <Link to="/getproduct" className='nav-link'>Get Books</Link>
                            </div>
                        </div>
                    </div>

                    {/* 4. Log Out Button */}
            <div className="nav-item mx-1">
              <button 
                className="btn btn-outline-danger btn-sm" 
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>

                    
                    

                    <div>
                        <Link to='/cart' className='btn btn-outline-warning'>Cart</Link>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    </div>
    
  )
  
}

export default Navbar
