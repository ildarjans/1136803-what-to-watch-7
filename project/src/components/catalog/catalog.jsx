import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list.jsx';
import CatalogMoreBtn from '../catalog-more-btn/catalog-more-btn.jsx';

function Catalog({films, title, specialClass, children}) {
  return (
    <section className={`catalog ${specialClass ? specialClass : ''}`}>
      <h2 className='catalog__title visually-hidden'>{title}</h2>

      {children}

      <FilmList films={films}/>

      <CatalogMoreBtn/>

    </section>
  );
}

Catalog.propTypes = {
  films: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  specialClass: PropTypes.string,
  children: PropTypes.element,
};

export default Catalog;
