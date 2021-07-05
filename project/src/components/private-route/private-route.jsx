import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {AppRoute, AuthStatus} from '../../const.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';


function PrivateRoute({authorizationStatus, exact, path, render}) {
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
  authorizationStatus: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
