import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { IconName, FaUserTie, FaShoppingCart, FaSearch } from "react-icons/fa";

const Navigation = ({ token }) => {
  return (
    <div className="container">
      <div className="Navigation">
        <Link to="/Home">
          <p className="logoName">
            LA<span>MA.</span>
          </p>{" "}
        </Link>

        <div className="Searchbar">
          <input
            type="text"
            placeholder="what do you want "
            className="SearchBarInput"
          ></input>
          <FaSearch className="searchIcon" />
        </div>
        <div className="navbar">
          {token ? (
            <div>
              <Link to="/cart" className="navcart"></Link>
              <FaShoppingCart />
              <Link to="/logout" className="navRegister">
                log out
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="navLogin">
                Login
              </Link>
              <Link to="/Register" className="navRegister">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
