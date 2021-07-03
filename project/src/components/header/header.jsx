import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import {LogoClass} from '../../const.js';

function Header({children, specialClass}) {
  return (
    <header className={`page-header ${specialClass}`}>

      <Logo specialClass={LogoClass.HEADER}/>

      {children}

    </header>
  );
}

Header.propTypes = {
  specialClass: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
