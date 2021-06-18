import PropTypes from 'prop-types';

const optionalString = PropTypes.string;
const optionalNumber = PropTypes.number;

export const filmPropertyTypes = {
  id: optionalString,
  title: optionalString,
  posterImage: optionalString,
  previewImage: optionalString,
  backgroundImage: optionalString,
  backgroundColor: optionalString,
  videoLink: optionalString,
  previewVideoLink: optionalString,
  description: optionalString,
  rating: optionalNumber,
  scoresCount: optionalNumber,
  director: optionalString,
  starring: PropTypes.arrayOf(optionalString),
  runTime: optionalNumber,
  genre: optionalString,
  year: optionalNumber,
  isFavorite: PropTypes.bool,
};

export const filmPropTypes = PropTypes.shape(filmPropertyTypes);

export const filmsPropTypes = PropTypes.arrayOf(filmPropTypes);
