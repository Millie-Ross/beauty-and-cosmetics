import React from 'react'
import SearchBar from './Searchbar';


import { Link } from 'react-router-dom'

const Navbar = () => {
    const bookData = ["Atomic Habits", "1984", "Meditations", "Your Wish is Your Command","War","Mastery","The Art of Seduction","The 48 Laws of Power","The Laws Of Human Nature","The Subtle art of not Giving a Fuck","The Mountain is You","The Prince","Think and Grow Rich","The Rise of Me"];
    
    
  return (
    <>
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
                                <Link to='/addproduct' className='nav-link'>Add Books</Link>
                            </div>
                            <div className='nav-item'>
                                <Link to="/getproduct" className='nav-link'>Get Books</Link>
                            </div>
                        </div>
                    </div>

                    
                    <div className="navbar-nav ms-auto">
                        <div className="nav-item">
                            <Link to="/signin" className='nav-link bg-success rounded-pill'> Sign In</Link>
                        </div>

                        <div className='nav-item'>
                            <Link to="/signup" className='nav-link bg-success rounded-pill'>Sign Up</Link>
                        </div>
                    </div>

                    <div>
                        <Link to='/cart' className='btn btn-outline-warning'>Cart</Link>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    </div>

        {/* SECTION 2: The Search Bar (Directly below the Navbar) */}
      <div className="row justify-content-center bg-light py-3 border-bottom g-0">
        <div className="col-md-6 col-sm-10">
          <SearchBar data={bookData} />
        </div>
        </div>
    
    </>
  )
  
}

export default Navbar
