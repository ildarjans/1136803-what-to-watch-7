import React from 'react';
import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthStatus} from '../../const.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';


function PrivateRoute({exact, path, render}) {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        authorizationStatus === AuthStatus.AUTHORIZED ?
          render(props) :
          <Redirect to={AppRoute.LOGIN}/>
      )}
    />
  );
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};


export default PrivateRoute;
