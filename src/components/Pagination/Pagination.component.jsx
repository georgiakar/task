import React from "react";
import "./Pagination.style.css";
import PropTypes from 'prop-types';

const Pagination = ({ size, number, totalElements, onPageChange }) => {
  return (
    <div className="pagination">
      {totalElements > 0 && (
        <>
          {number > 0 && (
            <>
              <div className="navigate" onClick={() => onPageChange(0)}>
                &lt;&lt; First
              </div>
              <div className="navigate" onClick={() => onPageChange(--number)}>
                &lt; Previous
              </div>
            </>
          )}
          <div>
            Showing {number * size + 1} to {(number + 1) * size < totalElements? (number + 1) * size: totalElements } of {totalElements} total results
          </div>
          { number !== Math.floor(totalElements/size) && (
             <>
              <div className="navigate" onClick={() => onPageChange(++number)}>
                Next &gt;
              </div>
              <div className="navigate" onClick={() => onPageChange(Math.floor(totalElements/size))}>
                Last &gt;&gt;
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

Pagination.propTypes = {
  size: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  totalElements: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  size: 0,
  number: 0,
  totalElements:0,
  onPageChange: () => {},
};

export default Pagination;
