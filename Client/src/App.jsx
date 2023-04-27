import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Services from "./components/services";
import Register from "./components/register";
import Events from "./components/events";
import About from "./components/about";
import ConatctUs from "./components/contact";
import Terms from "./components/terms";
import Login from "./components/login";
import Plans from "./components/plans";
import Howto from "./components/howto";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {
          //  user && user._id ? <Home/> : <Login/>
        }
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/howtouse" element={<Howto />}></Route>
      <Route path="/plans" element={<Plans />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="contactus" element={<ConatctUs />}></Route>
    </Routes>
  );
}

export default App;
