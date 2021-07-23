import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import {AppRoute} from '../../const.js';

function NotFoundPage() {
  return (
    <Header>
      <h1 className="page-title">Page not Found</h1>
      <Link to={AppRoute.ROOT}>Go to main page</Link>
    </Header>

  );
}

export default NotFoundPage;
