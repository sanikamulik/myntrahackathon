import React from "react";
import logo from "../images/logo-removebg-preview.png"; // Adjust the import path as necessary
import homeIcon from "../images/home-removebg-preview.png";
import fwdIcon from "../images/fwd-removebg-preview.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="navv">
          <div>
            <img id="logo" src={logo} alt="Logo" />
          </div>
          <form className="d-flex icon-group" role="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </form>
        </div>
      </div>
    </nav>
  );
};

export const BottomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="bottomnav">
        <div className="small">
          <img style={{width:'3.5rem', height:'2.5rem'}} src={homeIcon} alt="Home" />
          {/* <p>Home</p> */}
        </div>
        <div className="small">
        <svg style={{width:'3.5rem',height:'2rem'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
          {/* <p style={{marginTop:'1rem'}}>New</p> */}
        </div>
        <div>
          <img style={{width:'3.5rem',height:'4rem'}} src={fwdIcon} alt="Stores" />
          {/* <p>Stores</p> */}
        </div>
        <div>
        <svg style={{width:'4rem',height:'2rem'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
          {/* <p>TrendNxt</p> */}
        </div>
      </div>
      <div className="bottomtext">
        <p style={{marginLeft:'1.5rem'}}>Home</p>
        <p>New</p>
        <p>Stores</p>
        <p style={{marginRight:'0.8rem'}}>TrendNxt</p>
      </div>
    </nav>
  );
};

export default Navbar;
