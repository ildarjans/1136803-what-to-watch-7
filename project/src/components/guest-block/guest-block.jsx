import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';

function GuestBlock() {
  return (
    <div className="user-block">
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
    </div>
  );
}

export default GuestBlock;
