import React from 'react';
import Logo from '../logo/logo.jsx';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo className={'logo__link logo__link--light'}/>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
