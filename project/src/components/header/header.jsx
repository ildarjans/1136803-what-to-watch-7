import React from 'react';
import PropTypes from 'prop-types';

function Header({children, specialClass}) {
  return (
    <header className={`page-header ${specialClass}`}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {children}

    </header>
  );
}

Header.propTypes = {
  specialClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Header;
