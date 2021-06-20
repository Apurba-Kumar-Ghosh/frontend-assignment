import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Header() {
  let [sidebar, setShowSidebar] = useState(false);
  function handleSidebar() {
    setShowSidebar(!sidebar);
  }
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <nav className="navbar-container">
          <div className="nav-top">
            <div className="nav-icon">
              <Link to="#" onClick={handleSidebar}>
                <FaBars />
              </Link>
            </div>
          </div>
          <div className={sidebar ? "nav-menu active" : "nav-menu"}>
            <Link to="#" onClick={handleSidebar}>
              <GrClose className="icon" />
            </Link>
            <ul className="nav-menu-list">
              <Link to="/" onClick={handleSidebar}>
                <li className="list-item">Home</li>
              </Link>
              <Link to="/new" onClick={handleSidebar}>
                <li className="list-item">Create New Invoice</li>
              </Link>
              <Link to="/list" onClick={handleSidebar}>
                <li className="list-item">Invoice List</li>
              </Link>
              <Link to="/pending" onClick={handleSidebar}>
                <li className="list-item">Late Invoices</li>
              </Link>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}
