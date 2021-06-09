import React from 'react';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import SignInMessage from '../sign-in-message/sign-in-message.jsx';

const INVALID_EMAIL_MESSAGE = 'Please enter a valid email address';

function SignIn() {
  return (
    <div className="user-page">

      <Header/>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">

          <SignInMessage text={INVALID_EMAIL_MESSAGE}/>

          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>

    </div>
  );
}

export default SignIn;
