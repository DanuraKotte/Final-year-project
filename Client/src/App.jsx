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
import Secondhome from "./components/Secondhome";
import VoteLogin from "./components/vote-login";
import CountdownTimer from "./components/countdown";
import InviteVoters from "./components/invite-voters";
import Dashboard from "./components/dashboard";
import ForgotPassword from "./components/forgot-password";
import ChangePassword from "./components/change-password";

function App() {
  const [user, setLoginUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {
          //  user && user._id ? <Home/> : <Login/>
        }
      </Route>
      <Route path="/timer" element={<CountdownTimer />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/howtouse" element={<Howto />}></Route>
      <Route path="/plans" element={<Plans />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="contactus" element={<ConatctUs />}></Route>
      <Route path="/terms" element={<Terms />}></Route>
      <Route path="secondhome" element={<Secondhome />}></Route>
      <Route path="/votelogin" element={<VoteLogin />}></Route>
      <Route path="/invite-voters" element={<InviteVoters />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/forgotpw" element={<ForgotPassword />}></Route>
      <Route path="/changepw" element={<ChangePassword />}></Route>
    </Routes>
  );
}

export default App;
