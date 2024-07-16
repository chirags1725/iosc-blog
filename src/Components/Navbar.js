import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link style={{ textDecoration: "none", color: "White" }} to="/">
          <div className="logo">BLOG</div>
        </Link>
        <div className="links">
          <div className="link">Equipment</div>
          <div className="link">About Us</div>
          <div className="link">Blog</div>
        </div>
        <div className="account">
          <div style={{ display: "flex", fontSize: "1.4em" }}>
            <MdOutlineAccountCircle />
          </div>
          <div>Account</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
