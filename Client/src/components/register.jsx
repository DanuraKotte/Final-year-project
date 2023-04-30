import React, { useState } from "react";
import "../App.css";
import "../styles/inputs.css";
import "../styles/btn-styles.css";
import "../styles/texts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Navigate } from "react-router-dom";
import SideBg from "../assets/images/127login.png";
import BigLogo from "../assets/images/biglogo.png";
import axios from "axios";

function register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log( name,value)
    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerr = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password) {
      if (password === reEnterPassword) {
        axios
          .post("http://localhost:9002/register", user)
          .then((res) => console.log(res));

        // alert("posted")
      } else {
        alert("check the passwords");
      }
    } else {
      alert("invalid input");
    }
  };

  const bgstyles = {
    backgroundImage: `url(${SideBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-5 bg-common text-center pt-5 d-flex align-items-center">
          <div className="mx-auto">
            <h1 className="pt-5">Register</h1>
            <div
              className="mt-4 mb-5"
              style={{ backgroundColor: "darkblue", height: "2px" }}
            />
            <form action="" className="my-5 w-100">
              <input
                type="text"
                placeholder="Oraganisation Name"
                className="login-input-style mt-4 h-50"
                required
              />{" "}
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="login-input-style mt-4 h-50"
                required
              />{" "}
              <br />
              <input
                type="password"
                placeholder="Password"
                className="login-input-style mt-4 h-50"
                required
              />
              <br />
              <input
                type="password"
                placeholder="Re-enter Password"
                className="login-input-style mt-4 h-50"
                required
              />
              <div className="d-flex justify-content-center">
                <div class="form-check text-center mt-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <span class="form-check-label" for="defaultCheck1">
                    I agree with the website's{" "}
                    <a href="/terms" className="terms" target="_blank">
                      Terms and Coditions
                    </a>
                  </span>
                </div>
              </div>
              <Link to="/login">
                <button className="btn-1 w-75 mt-5">Register</button>
              </Link>
              <div className="mt-5">
                <span>Already have an account?</span>
                <Link to="/login" className="ps-3 text-1 fw-semibold ">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-7 bg-common text-white text-center d-flex align-items-center"
          style={bgstyles}>
          <div className="mx-auto ps-5 w-75">
            <img src={BigLogo} className="px-5" /> <br />
            <p className="py-5">
              Votely enables secure global voting, accessible to all. Vote
              anytime, anywhere, and have your voice heard. Join the community
              for democratic participation with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;

// <div>
//   {/* <div className="bg-style position-relative">
//     <Form
//       className="w-50 position-absolute top-50 start-50 translate-middle"
//       action=""
//       method="post">
//       <h1 className="mb-5">Register</h1>
//        <div>
//         <input
//           type="text"
//           className="w-100 input-box px-4 py-2 mb-4 border border-0"
//           placeholder="Username"
//         />
//       </div>  */}
// <div className='bg-style position-relative'>
//   <Form className='w-50 position-absolute top-50 start-50 translate-middle'>
//     <h1 className='mb-5'>Register</h1>
//     <div>
//       <input type="text" name="name" value={user.name}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Username'  onChange={handleChange}  />
//     </div>

//       {/* <div>
//         <input
//           type="email"
//           className="w-100 input-box px-4 py-2 mb-4 border border-0"
//           placeholder="Email"
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           className="w-100 input-box px-4 py-2 mb-4 border border-0"
//           placeholder="Password"
//         />
//       </div> */}
//     <div>
//       <input type="email"name="email" value={user.email}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Email' onChange={handleChange}   />
//     </div>
//     <div>
//       <input type="password"name="password" value={user.password}  className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Password' onChange={handleChange}   />
//     </div>

//       {/* <div>
//         <input
//           type="password"
//           className="w-100 input-box px-4 py-2 mb-4 border border-0"
//           placeholder="Confirm Password"
//         />
//       </div> */}

//       <Form.Group className="mb-3 w-25" controlId="formBasicCheckbox">
//     <div>
//       <input type="password" name="reEnterPassword" value={user.reEnterPassword} className='w-100 input-box px-4 py-2 mb-4 border border-0' placeholder='Re-Enter Password' onChange={handleChange}   />
//     </div>
//     </Form.Group>

//     <Form.Group className="mb-3 w-25" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Remember me" />
//       </Form.Group>

//       <Link variant="primary" to="/login">
//         Register
//       </Link>
//       <h5 className="mt-5">
//         Have an account?{" "}
//         <a className="ps-2" href="#">
//           Login
//         </a>
//       </h5>
//     </Form>
//   </div>
//     <Button variant="primary" onClick={registerr}>Register</Button>
//     <h5 className='mt-5'>Have an account? <a className='ps-2' href="/login">Login</a></h5>

//   {/* </Form> */}
// </div>

// // </div>
