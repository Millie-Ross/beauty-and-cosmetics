import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesa = () => {
  // unpackage the data
  const {product}=useLocation().state||{}
  const [message,setMessage]=useState("")
  const [error,setError]=useState("")
  const [phone,setPhone]=useState("")

  const handlesubmit=async(e)=>{
    e.preventDefault()
    setMessage("Please wait as we process your request...")

    const formData=new FormData()
    formData.append("phone",phone)
    formData.append("amount",product.product_cost)
    const response=await axios.post("http://mambairene.alwaysdata.net/api/mpesa_payment",formData)
    setMessage(response.data.message)

  }




  const imgurl="http://mambairene.alwaysdata.net/static/images/"
  return (
    <div className='row justify-content-center'>
      <h2 className='text-success mt-3'>Lipa na Mpesa</h2>
      <h2 className='text-success'>{message}</h2>

      <div className="col-md-6 p-3">
        <div className="card shadow">
          <img src={imgurl+product.product_photo} alt="" height={400} width={617}/>
          
          <div className="card-body p-3">
          <h5>{product.product_name}</h5>
          <p className='text-muted'>{product.product_description}</p><br />
          
          <b className="text-warning">{product.product_cost}</b>
          <form action="" onSubmit={handlesubmit}>
            <input type="number" placeholder='Enter Phone(2547xxxxxxxx)' className='form-control p-3' onChange={(e)=>setPhone(e.target.value)}required /> <br />
            <button className='btn bg-success text-light form-control p-3 w-100'>Make Payment</button>

          </form>
          </div>
          

        </div>

      </div>
        
    </div>
  )
}

export default Mpesa
