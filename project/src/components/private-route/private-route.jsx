import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.js';
import {booleanPropTypes, funcPropTypes, stringPropTypes} from '../../prop-types/common.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';


function PrivateRoute({authorizationStatus, isExact, path, render}) {
  return (
    <Route
      exact={isExact}
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
  authorizationStatus: stringPropTypes.isRequired,
  path: stringPropTypes.isRequired,
  isExact: booleanPropTypes.isRequired,
  render: funcPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
