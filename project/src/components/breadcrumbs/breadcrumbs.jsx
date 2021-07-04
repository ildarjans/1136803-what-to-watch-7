import React from 'react';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../prop-types/films.js';
import {AppRoute} from '../../const.js';

function Breadcrumbs({id, title}) {
  const filmRoute = AppRoute.FILM.replace(':id', id);
  const addReviewRoute = AppRoute.REVIEW.replace(':id', id);
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={filmRoute} className="breadcrumbs__link">{title}</Link>
        </li>
        <li className="breadcrumbs__item">
          <Link to={addReviewRoute} className="breadcrumbs__link">Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  id: filmPropTypes.id.isRequired,
  title: filmPropTypes.title.isRequired,
};

export default Breadcrumbs;
