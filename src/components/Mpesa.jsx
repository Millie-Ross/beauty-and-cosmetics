import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Mpesa = () => {
  const location = useLocation();

  // 1. IMPROVED DATA UNPACKING
  // If location.state is missing, we use an empty object {} to prevent crashing
  const product = location.state?.product || {};
  const amountToPay = location.state?.amount || product?.product_cost || 0;

  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Please wait as we process your request...");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      // Ensure we have a valid amount even if product is empty
      formData.append("amount", amountToPay);

      const response = await axios.post("http://mambairene.alwaysdata.net/api/mpesa_payment", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Connection error. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  const imgurl = "http://mambairene.alwaysdata.net/static/images/";

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className="col-md-6 p-3">
          <h2 className='text-success mt-3'>Lipa na Mpesa</h2>
          
          <div className="card shadow">
            {/* Only show image if product_photo exists */}
            {product.product_photo && (
              <img 
                src={imgurl + product.product_photo} 
                alt="Product" 
                height={400} 
                width="100%" 
                style={{ objectFit: 'cover' }}
              />
            )}
            
            <div className="card-body p-3">
              <h5>{product.product_name || "Service Payment"}</h5>
              <p className='text-muted'>{product.product_description || "Completing your transaction"}</p>
              
              <h3 className="text-dark">Total: <span className="text-success">Ksh {amountToPay}</span></h3>
              
              {/* STATUS MESSAGE */}
              {message && (
                <div className="alert alert-info mt-2">
                  {message}
                </div>
              )}

              <form onSubmit={handlesubmit} className="mt-4">
                <label>Mpesa Phone Number</label>
                <input 
                  type="number" 
                  placeholder='2547xxxxxxxx' 
                  className='form-control p-3 mb-3' 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                />
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className='btn btn-success text-light form-control p-3 w-100'
                >
                  {loading ? "Processing..." : "Pay Now"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mpesa;