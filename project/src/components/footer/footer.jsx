import React from 'react';
import Logo from '../logo/logo.jsx';
import {LogoClass} from '../../const.js';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo specialClass={LogoClass.FOOTER}/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
