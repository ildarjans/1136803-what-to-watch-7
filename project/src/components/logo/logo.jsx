import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute} from '../../const.js';


function Logo({className}) {
  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={className}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Logo;
