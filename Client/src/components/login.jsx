import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Home from "./home";
// import {useHistory} from "react-router-dom"
import axios from "axios";

function login() {
  // const history  =useHistory()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log( name,value)
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginn = () => {
    axios
      .post("http://localhost:9002/login", user)
      // .then (res => console.log(res.data.message))
      .then((res) => alert(res.data.message));
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"></input>{" "}
      <br />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your password"></input>
      <br />
      <button className="button" onClick={loginn}>
        login
      </button>
      <div>or</div>
      <div className="button">
        <button>
          <a className="ps-2" href="/register">
            Register
          </a>
        </button>
      </div>
    </div>
  );
}

export default login;

// function login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Check if login details are correct
//     if (username === "myusername" && password === "mypassword") {
//       setLoggedIn(true);
//     }
//   };

//   if (loggedIn) {
//     return <Navigate to="/home" />;
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default login;
