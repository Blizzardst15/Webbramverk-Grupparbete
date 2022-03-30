import { Outlet, Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import logo from "../image/logo-gold-jensen-yh.svg";

const Header = () => {
  return (
    <div className="fixed-header">
      <img className="logo" src={logo} alt="logo" />

      <nav>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Home
        </Link>
        <Link
          to="/sara"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Sara
        </Link>
        <Link
          to="/bomi"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Bomi
        </Link>
        <Link
          to="/kristofer"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Kristofer
        </Link>
        <Link
          to="/erik"
          style={{
            textDecoration: "none",
            color: "white",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
          Erik
        </Link>
      </nav>

<<<<<<< HEAD
            <nav>
                <Link to="/" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Home</Link>
                <Link to="/sara" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Sara</Link>
                <Link to="/bomi" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Bomi</Link>
        

                <Link to="/kristofer" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Kristofer</Link>
                <Link to="/erik" style={{ textDecoration: "none", color: "white", paddingRight: '20px', paddingLeft: '20px' }}>Erik</Link>
            </nav>


            <Outlet />
        </div>
    )
=======
      <Outlet />
    </div>
  );
>>>>>>> main
};

export default Header;
