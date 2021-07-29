import React from 'react';
import './spinner.css';

function Spinner() {
  return (
    <div className="spinner-wrapper" data-testid={'spinner'}>
      <div className="spinner">
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
        <span className="spin"/>
      </div>

    </div>
  );
}

export default Spinner;
