import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logoutUser} from '../../middleware/thunk-api.js';
import Header from '../header/header.jsx';
import {selectAuthorizationStatus, selectUser} from '../../selectors/selectors.js';
import {AppRoute, AuthStatus} from '../../const.js';


function AuthHeader({children, ...restProps}) {
  const history = useHistory();
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleUserBlockItemClick = () => dispatch(logoutUser());
  const handleUserAvatarClick = () => history.push(AppRoute.FAVORITES);
  const isAuthorized = authorizationStatus === AuthStatus.AUTHORIZED;
  return (
    <Header {...restProps}>
      {children}
      {isAuthorized && (
        <ul className="user-block">
          <li className="user-block__item">
            <div onClick={handleUserAvatarClick} className="user-block__avatar">
              <img src={user.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li onClick={handleUserBlockItemClick} className="user-block__item">
            <Link to={AppRoute.ROOT} className="user-block__link">Sign Out</Link>
          </li>
        </ul>
      )}
      {!isAuthorized && (
        <div className="user-block">
          <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
        </div>
      )}
    </Header>
  );
}

AuthHeader.propTypes = {
  children: PropTypes.node,
};

export default AuthHeader;
