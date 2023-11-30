import React from "react";
import classes from "./Navbar.module.css"; // Import module CSS

import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">
          <img src="/images/logo.jpg" alt="logo" />
        </Link>
      </div>

      <div className={classes.navlinks}>
        <NavLink to="/" className={classes.link}>
          Characters
        </NavLink>

        <NavLink to="/episodes" className={classes.link}>
          Episodes
        </NavLink>

        <NavLink to="/location" className={classes.link}>
          Location
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
