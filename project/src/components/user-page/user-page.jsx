import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import SignInForm from '../sign-in-form/sign-in-form.jsx';
import {loginUser} from '../../middleware/thunk-api.js';
import {selectAuthorizationStatus} from '../../selectors/selectors.js';
import {AppRoute, AuthStatus, HeaderClass} from '../../const.js';


function UserPage() {
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const dispatch = useDispatch();
  const handleSubmitForm = (authInfo) => dispatch(loginUser(authInfo));
  return authorizationStatus === AuthStatus.NO_AUTHORIZED ?
    (
      <div className="user-page">

        <Header className={HeaderClass.USER_PAGE}>
          <h1 className="page-title user-page__title">Sign in</h1>
        </Header>

        <div className="sign-in user-page__content">
          <SignInForm onSubmit={handleSubmitForm}/>
        </div>

        <Footer/>

      </div>
    ) :
    <Redirect to={AppRoute.ROOT}/>;
}

export default UserPage;
