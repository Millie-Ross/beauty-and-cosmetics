import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addproduct = () => {
  const user=JSON.parse(localStorage.getItem("user"))
  // four states to hold the data
  const [productname,setProductname]=useState("")
  const [productdescription,setProductdescription]=useState("")
  const [productcost,setProductcost]=useState("")
  const [file,setFile]=useState("")

  // background processes
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")

  // create function to handle submit
  const handlesubmit=async(e)=>{
    e.preventDefault()

    // set loading state
  setLoading("Please wait...")
  const formData=new FormData()

  formData.append("product_name",productname)
  formData.append("product_description",productdescription)
  formData.append("product_cost",productcost)
  formData.append("product_photo",file)

  try {
    const response=await axios.post("http://mambairene.alwaysdata.net/api/add_product",formData)
    setLoading("")
    setError("")
    setSuccess(response.data.message)

    // reset the form
    setProductname("")
    setProductdescription("")
    setProductcost("")
    setFile("")
  } catch (error) {
    setLoading("")
    setSuccess("")
    setError(error.message)
    
  }
  }

  


  return (
    <div className='row mt-4 justify-content-center'>
      <div className='col-md-6 card shadow p-4'>
      <h1>Upload Products</h1>
      {/* bind the states */}
      <h2 className='text-warning'>{loading}</h2>
      <h2 className='text-success'>{success}</h2>
      <h2 className='text-danger'>{error}</h2>
      
      <form action="" onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter product name' className='form-control' onChange={(e)=>setProductname(e.target.value)}required /><br />
        <textarea name="" id="" cols="" rows="" className='form-control' placeholder='Decribe your product' onChange={(e)=>setProductdescription(e.target.value)}required></textarea><br />
        <input type="number" placeholder='Enter product cost' className='form-control' onChange={(e)=>setProductcost(e.target.value)}required/><br />
        <input type="file" placeholder='Choose file' className='form-control' onChange={(e)=>setFile(e.target.files[0])}required accept='image/*' /><br />
        
       <button className='btn btn-outline-warning w-100' type='submit'>Add Books</button>

      </form>

    </div>
    </div>
  )
}

export default Addproduct
