import React from 'react';
import './spinner.css';

const spinnerKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Spinner() {
  return (
    <div className="spinner">
      {spinnerKeys.map((key) => <span key={key} className="spin"/>)}
    </div>
  );
}

export default Spinner;
