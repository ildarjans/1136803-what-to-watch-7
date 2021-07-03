import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import {LogoClass} from '../../const.js';

function Header({children, className}) {
  return (
    <header className={`page-header ${className}`}>
      <Logo specialClass={LogoClass.HEADER}/>
      {children}
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
