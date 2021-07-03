import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import SignInForm from '../sign-in-form/sign-in-form.jsx';
import {loginUser} from '../../middleware/thunk-api.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';
import {AppRoute, AuthStatus, HeaderClass} from '../../const.js';

function UserPage({authorizationStatus, onSubmit}) {
  return authorizationStatus === AuthStatus.NO_AUTHORIZED ?
    (
      <div className="user-page">

        <Header className={HeaderClass.USER_PAGE}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>

        <div className="sign-in user-page__content">
          <SignInForm onSubmit={onSubmit}/>
        </div>

        <Footer/>

      </div>
    ) :
    <Redirect to={AppRoute.ROOT}/>;
}

UserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: selectAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authInfo) {
    dispatch(loginUser(authInfo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
