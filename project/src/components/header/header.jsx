import React from 'react';
import Logo from '../logo/logo.jsx';
import {LogoClass} from '../../const.js';
import {nodePropTypes, stringPropTypes} from '../../prop-types/common.js';

function Header({children, specialClass}) {
  return (
    <header className={`page-header ${specialClass}`}>

      <Logo specialClass={LogoClass.HEADER}/>

      {children}

    </header>
  );
}

Header.propTypes = {
  specialClass: stringPropTypes,
  children: nodePropTypes,
};

export default Header;
