import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/footer-logo.png";

function SecondNavigationBar() {
  return (
    <>
      <Navbar className="bg-top" expand="md">
        <div className="container-fluid py-4">
          <Link
            to="/"
            type="button"
            onClick={() => setSelectedTab("home")}
            className="ms-5">
            <img src={Logo} className="w-50" />
          </Link>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto py-2">
              <Link
                to="/"
                type="button"
                onClick={() => setSelectedTab("home")}
                className="text-white text-uppercase mx-5">
                Home
              </Link>
              <Link
                to="/services"
                type="button"
                onClick={() => setSelectedTab("services")}
                className="text-white text-uppercase">
                service
              </Link>
              <Link
                type="button"
                to="/plans"
                className="text-white text-uppercase mx-5">
                plans
              </Link>
              <Link to="/about" className="text-white text-uppercase">
                About Us
              </Link>
            </Nav>
            Login
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default SecondNavigationBar;
