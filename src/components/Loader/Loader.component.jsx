import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Loader.style.css";
import PropTypes from "prop-types";

const Loader = ({ loader, children }) => {
  return (
    <>
      {loader && (
        <div className="loader">
          <img className="logo" src={logo} alt="logo"></img>
        </div>
      )}
      {!loader && 
        <>
          {children}
        </>
      }
    </>
  );
};

Loader.propTypes = {
  loader: PropTypes.bool.isRequired,
  children: PropTypes.any,
};

Loader.defaultProps = {
  loader: false,
  children: <></>,
};

export default Loader;
