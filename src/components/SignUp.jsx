import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  // declare the four steps to hold the data

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")

  // create the three states
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // create the function to handle data submission
  const handlesubmit=async(e)=>{
    e.preventDefault()
    // set the loading
    setLoading("Please wait...")

    // create a form data
    const formData=new FormData()
    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phone",phone)

    // submit the details
    try {
    const response=await axios.post("http://mambairene.alwaysdata.net/api/signup",formData)
    setSuccess(response.data.message)
    setLoading("")

      
    } catch (error) {
      setError(error.message)
      setLoading("")
    }

    }



  return (
    <div className='row mt-4 justify-content-center'>
      <div className="col-md-6 card shadow p-4">
        <h1>SignUp</h1>
        {/* bind the states */}
          <h2 className='text-primary'>{loading}</h2>
          <h2 className='text-success'>{success}</h2>
          <h2 className='text-danger'>{error}</h2>
        {/* create a form */}
        <form action="" onSubmit={handlesubmit}>
          <input type="text" placeholder='Enter Username' className='form-control' onChange={(e)=>setUsername(e.target.value)} required/><br />
          <input type="email" placeholder='Enter Email' className='form-control'onChange={(e)=>setEmail(e.target.value)} required/><br />
          <input type="password" placeholder='Enter Password' className='form-control'onChange={(e)=>setPassword(e.target.value)} required/><br />
          <input type="tel" placeholder='Enter Phone' className='form-control' onChange={(e)=>setPhone(e.target.value)} required/><br />
          {/* create submit button */}
          <input type="submit" value="Sign Up" className='btn btn-outline-primary w-100'  /><br />
          
        </form>
        Already have an account?<Link to="/signin">SignIn</Link>
      </div>
    </div>
  )
}

export default SignUp
