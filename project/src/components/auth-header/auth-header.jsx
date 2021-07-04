import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logoutUser} from '../../middleware/thunk-api.js';
import Header from '../header/header.jsx';
import {selectAuthorizationStatus, selectUser} from '../../selectors/selectors.js';
import {AppRoute, AuthStatus} from '../../const.js';
import {userPropTypes} from '../../prop-types/user.js';


function AuthHeader({authorizationStatus, onSignOut, user, children, ...restProps}) {
  const isAuth = authorizationStatus === AuthStatus.AUTHORIZED;
  return (
    <Header {...restProps}>
      {children}
      {isAuth && (
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li onClick={onSignOut} className="user-block__item">
            <Link to={AppRoute.ROOT} className="user-block__link">Sign Out</Link>
          </li>
        </ul>
      )}
      {!isAuth && (
        <div className="user-block">
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        </div>
      )}
    </Header>
  );
}

AuthHeader.propTypes = {
  children: PropTypes.node,
  authorizationStatus: PropTypes.string.isRequired,
  onSignOut: PropTypes.func.isRequired,
  user: PropTypes.shape(userPropTypes),
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
  user: selectUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSignOut() {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthHeader);
