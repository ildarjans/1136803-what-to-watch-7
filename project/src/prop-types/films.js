import PropTypes from 'prop-types';

export const filmPropertyTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  posterImage: PropTypes.string,
  previewImage: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  videoLink: PropTypes.string,
  previewVideoLink: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  scoresCount: PropTypes.number,
  director: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  runTime: PropTypes.number,
  genre: PropTypes.string,
  year: PropTypes.number,
  isFavorite: PropTypes.bool,
};

export const filmPropTypes = PropTypes.shape(filmPropertyTypes);

export const filmsPropTypes = PropTypes.arrayOf(filmPropTypes);
