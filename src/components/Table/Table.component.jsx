import React from "react";
import "./Table.style.css";
import PropTypes from 'prop-types';

const Table = ({ headings, contents, rowProps, columnProps }) => {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            {headings.map((h, i) => (
              <th {...columnProps[i]} key={i}>{h}</th>
            ))}
          </tr>
          {contents.map((row, i) => (
            <tr {...rowProps[i]} key={i}>
              {row.map((column, j) => (
                <td {...columnProps[j]} key={'td-' + i + '-'+ j}>{column}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
  contents: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  rowProps: PropTypes.arrayOf(PropTypes.object),
  columnProps: PropTypes.arrayOf(PropTypes.object)
};

Table.defaultProps = {
  headings: [],
  contents: [],
  rowProps: [],
  columnProps: []
};

export default Table;
