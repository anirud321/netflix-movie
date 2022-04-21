import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="leftnav">
        <img
          className="netflix"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <span> <a href="">Home</a></span>
        <span><a href="">Movies</a></span>
        <span><a href="">Series</a></span>
      </div>
      <div className="rightnav">
        <img
          className="usericon"
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0ZmxpeCUyMGxvZ298ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
