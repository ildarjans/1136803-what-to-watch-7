import PropTypes from 'prop-types';

export const reviewPropTypes = {
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
};
