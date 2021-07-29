import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';

function Header({children, className}) {
  return (
    <header className={`page-header ${className ? className : ''}`}>
      <Logo className={'logo__link logo__link'}/>
      {children}
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
