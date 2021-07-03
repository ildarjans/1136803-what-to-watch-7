import PropTypes from 'prop-types';

export const userPropertyTypes = {
  id: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  token: PropTypes.string,
};

export const userPropTypes = PropTypes.shape(userPropertyTypes);
