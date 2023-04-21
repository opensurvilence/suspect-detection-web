import React from 'react'

const Navbar = () => {
  return (
      <div className="navbar">
        <div className="company-name">Company Name</div>
        <div className="nav-links">
          <a href="./">Profile</a>
          <a href="./">Settings</a>
          <a href="./">Log Out</a>
        </div>
      </div>
  );
}

export default Navbar