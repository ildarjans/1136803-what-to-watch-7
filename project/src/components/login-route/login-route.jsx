import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';
import {booleanPropTypes, funcPropTypes, stringPropTypes} from '../../prop-types/common.js';


function LoginRoute({authorizationStatus, isExact, path, render}) {
  // eslint-disable-next-line
  console.log(authorizationStatus === AuthStatus.NO_AUTHORIZED);
  return (
    <Route
      exact={isExact}
      path={path}
      render={() => (
        authorizationStatus === AuthStatus.NO_AUTHORIZED ?
          render() :
          <Redirect to={AppRoute.ROOT}/>
      )}
    />
  );
}

LoginRoute.propTypes = {
  authorizationStatus: stringPropTypes.isRequired,
  path: stringPropTypes.isRequired,
  isExact: booleanPropTypes.isRequired,
  render: funcPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

export default connect(mapStateToProps)(LoginRoute);
