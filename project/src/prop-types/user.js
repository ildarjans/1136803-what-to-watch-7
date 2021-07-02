import PropTypes from 'prop-types';

export const userPropertyTypes = {
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  token: PropTypes.string,
};

export const authorizationStatusPropTypes = PropTypes.string;

export const userPropTypes = PropTypes.shape(userPropertyTypes);
