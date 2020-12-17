import React from "react";
import "./Heading.style.css";
import PropTypes from "prop-types";

const Heading = ({ title, description }) => {
  return (
    <div className="heading">
      <h1>{title} </h1>
      <h4>{description}</h4>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Heading.defaultProps = {
  title: "",
  description: "",
};

export default Heading;
