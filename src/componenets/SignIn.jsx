import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate=useNavigate()
  // the two states to hold the email and password

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  // background processes
  const [loading,setLoading]=useState("")
  const [success,setSuccess]=useState("")
  const [error,setError]=useState("")

  // create the function to handle submit
  const handlesubmit=async(e)=>{
    e.preventDefault()


    // update loading state
    setLoading("Please wait...")


    const formData=new FormData()
    formData.append("email",email)
    formData.append("password",password)

    try {
      const response=await axios.post("http://mambairene.alwaysdata.net/api/signin",formData)
      
      if(response.data.user){
        setLoading("")
        setSuccess(response.data.message)
        navigate("/getproduct")
      }
      else{
        setLoading("")
        setSuccess()
        setError(response.data.message)
      }
        
    } catch (error) {
      setLoading("")
      setSuccess("")
      setError(error.message)
      
    }
  }
  
  return (
    <div className='row mt-4 justify-content-center'>
    <div className='col-md-6 card shadow p-4'>
      <h1>SignIn</h1>

      {/* bind the states */}
      <h2 className="text-warning">{loading}</h2>
      <h2 className="text-success">{success}</h2>
      <h2 className="text-danger">{error}</h2>
      
      <form action="" onSubmit={handlesubmit}>
        <input type="email" placeholder='Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}required/><br />
        <input type="password" placeholder='Password' className='form-control' onChange={(e)=>setPassword(e.target.value)} required/><br />
        {/* create submit button */}
        <input type="submit" value="Sign In" className='btn btn-outline-primary w-100'  /><br />
      </form>
      Don't have an account?<Link to='/signup'>SignUp</Link>
    </div>
    </div>
  )
}

export default SignIn
