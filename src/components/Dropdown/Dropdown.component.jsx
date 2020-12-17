import React from "react";
import "./Dropdown.style.css"
import PropTypes from 'prop-types';

const Dropdown = ({ options, defaultValue, onSelect, label }) => {
  return (
    <div className="dropdown">
      <label>{label} </label>
      <select defaultValue={defaultValue} onChange={(event) => onSelect(event.target.value)}>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.any,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string
};

Dropdown.defaultProps = {
  options: [],
  defaultValue: 0,
  onSelect:() => {},
  label: ''
};

export default Dropdown;