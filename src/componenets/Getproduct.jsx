import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Getproduct = () => {
  const navigate=useNavigate()

  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")

  // function to handle the get product
  const getProduct=async()=>{
    setLoading("Please wait we are retrieving products....")
    
    try {
      const response=await axios.get("http://mambairene.alwaysdata.net/api/get_product")
      setLoading("")
      setProducts(response.data)
      setError("")
    } catch (error) {
      setLoading("")
      setError(error.message)
    }

  }
  useEffect(()=>{
    getProduct()
  },[])


  const imgurl="http://mambairene.alwaysdata.net/static/images/"
  return (

    
    <div className='row'>
      <h2>Available products</h2>
      <h2 className="text-warning">{loading}</h2>
      <h2 className="text-danger">{error}</h2>

      {products.map((product)=>(

      <div className="col-md-3 justify-content-center">
        <div className="card mb-3 shadow">
          <img src={imgurl+product.product_photo} alt="" height={250} width={296} className='p-1'/>
          
        

          <div className="card-body">
            <h5>{product.product_name}</h5>
            <p className="text-muted">{product.product_description}</p>
            <b className="text-warning">{product.product_cost}</b><br />
            <button className='btn btn-outline-danger w-100' onClick={()=>navigate("/mpesa",{state:{product}})}>Purchase Now</button>
          </div>
        </div>
      </div>
      ))}

      
      
     <div id='myCarousel' className='carousel slide' data-bs-ride="carousel">
      {/* wraping carousel items */}
      <div className="carousel-item active">
        <img src="kc1.jpeg" alt="slide1" className='d-block w-100' height={300}/>
        
      </div>
      <div className="carousel-item active">
          <img src="kc2.jpeg" alt="slide2" className='d-block w-100' height={300} />

        </div>
        <div className="carousel-item active">
          <img src="kc3.jpg" alt="slide3" className='d-block w-100' height={300}/>

        </div>
        {/* carousel controls */}
        <a href="#myCarousel" className='carousel-control-prev' data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-danger"></span>
        </a>
        <a href="#myCarousel" className='carousel-control-next' data-bs-slide="next">
          <span className="carousel-control-next-icon bg-danger"></span>
        </a>
     </div>
     <h2 className='bg-warning'>We also offer deliveries</h2>
    </div>
    
  )
}

export default Getproduct
