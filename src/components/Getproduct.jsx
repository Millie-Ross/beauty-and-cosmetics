import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Import useCart hook
import { useCart } from './CartContext'; 

const Getproduct = () => {
  const navigate = useNavigate();
  
  // Fix 1: Hook must be inside the component
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const getProduct = async () => {
    setLoading("Please wait, we are retrieving products....");
    try {
      const response = await axios.get("http://mambairene.alwaysdata.net/api/get_product");
      setLoading("");
      setProducts(response.data);
      setError("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const imgurl = "http://mambairene.alwaysdata.net/static/images/";

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className="col-md-12 mb-4">
          {/* Fix 2: Corrected Carousel Structure */}
          <div id='myCarousel' className='carousel slide' data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="club1.jpeg" alt="slide1" className='d-block w-100' height={450} style={{objectFit: 'cover'}}/>
              </div>
              <div className="carousel-item">
                <img src="club2.jpeg" alt="slide2" className='d-block w-100' height={450} style={{objectFit: 'cover'}}/>
              </div>
              <div className="carousel-item">
                <img src="club3.jpeg" alt="slide3" className='d-block w-100' height={450} style={{objectFit: 'cover'}}/>
              </div>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
            </button>
          </div>
        </div>

        <h2 className="text-center my-4">Available Books</h2>
        
        {loading && <h2 className="text-warning text-center">{loading}</h2>}
        {error && <h2 className="text-danger text-center">{error}</h2>}

        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id || product.product_id}>
              <div className="card mb-4 shadow-sm">
                <img 
                  src={imgurl + product.product_photo} 
                  alt={product.product_name} 
                  height={250} 
                  className='card-img-top p-2'
                  style={{objectFit: 'contain'}}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.product_name}</h5>
                  <p className="card-text text-muted" style={{height: '50px', overflow: 'hidden'}}>
                    {product.product_description}
                  </p>
                  <h6 className="text-primary">Ksh {product.product_cost}</h6>
                  
                  <div className="d-grid gap-2 mt-3">
                    <button 
                      className='btn btn-danger' 
                      onClick={() => navigate("/mpesa", { state: { product } })}
                    >
                      Purchase Now
                    </button>
                    <button 
                      className='btn btn-outline-warning' 
                      onClick={() => addToCart({
                        id: product.id || product.product_id, // Ensure ID consistency
                        name: product.product_name,
                        price: product.product_cost,
                        image: product.product_photo
                      })}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-warning text-center p-3 mt-4'>
          <h3>We also can deliver the books</h3>
        </div>
      </div>
    </div>
  );
};

export default Getproduct;