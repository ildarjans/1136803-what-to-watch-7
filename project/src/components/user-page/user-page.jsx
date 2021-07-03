import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import SignInForm from '../sign-in-form/sign-in-form.jsx';
import {loginUser} from '../../middleware/thunk-api.js';
import {HeaderClass} from '../../const.js';

function UserPage({onSubmit}) {
  return (
    <div className="user-page">

      <Header specialClass={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <SignInForm onSubmit={onSubmit}/>
      </div>

      <Footer/>

    </div>
  );
}

UserPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authInfo) {
    dispatch(loginUser(authInfo));
  },
});

export default connect(null, mapDispatchToProps)(UserPage);
