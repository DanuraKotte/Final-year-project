import React,  { useState } from 'react';
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios"


function register() {

  const [ user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
})

const handleChange =e => {
  const { name,value}= e.target
  // console.log( name,value)
  setUser({
      ...user,
      [name]: value
      
  })
}

const registerr = () => {
  const{name,email,password,reEnterPassword} = user
  if ( name && email && password ){
      if(password === reEnterPassword) {              
      axios.post("http://localhost:9002/register", user)
      .then (res => console.log(res))

      // alert("posted")
  }else {
      alert("check the passwords")
  }
  } else
  {
      alert ("invalid input")
  }
  
}


  return (
    <div>
      {/* <div className="bg-style position-relative">
        <Form
          className="w-50 position-absolute top-50 start-50 translate-middle"
          action=""
          method="post">
          <h1 className="mb-5">Register</h1>
           <div>
            <input
              type="text"
              className="w-100 input-box px-4 py-2 mb-4 border border-0"
              placeholder="Username"
            />
          </div>  */}
    <div className='bg-style position-relative'>
      <Form className='w-50 position-absolute top-50 start-50 translate-middle'>
        <h1 className='mb-5'>Register</h1>
        <div>
          <input type="text" name="name" value={user.name}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Username'  onChange={handleChange}  />
        </div>

          {/* <div>
            <input
              type="email"
              className="w-100 input-box px-4 py-2 mb-4 border border-0"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-100 input-box px-4 py-2 mb-4 border border-0"
              placeholder="Password"
            />
          </div> */}
        <div>
          <input type="email"name="email" value={user.email}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Email' onChange={handleChange}   />
        </div>
        <div>
          <input type="password"name="password" value={user.password}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Password' onChange={handleChange}   />
        </div>

          {/* <div>
            <input
              type="password"
              className="w-100 input-box px-4 py-2 mb-4 border border-0"
              placeholder="Confirm Password"
            />
          </div> */}

          <Form.Group className="mb-3 w-25" controlId="formBasicCheckbox">
        <div>
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Re-Enter Password' onChange={handleChange}   />
        </div>
        </Form.Group>
        
        <Form.Group className="mb-3 w-25" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Link variant="primary" to="/login">
            Register
          </Link>
          <h5 className="mt-5">
            Have an account?{" "}
            <a className="ps-2" href="#">
              Login
            </a>
          </h5>
        </Form>
      </div>
        <Button variant="primary" onClick={registerr}>Register</Button>
        <h5 className='mt-5'>Have an account? <a className='ps-2' href="/login">Login</a></h5>

      {/* </Form> */}
    </div>

    // </div>
  );
}

export default register;
