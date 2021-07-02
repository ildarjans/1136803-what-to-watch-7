import React, {useRef, useState} from 'react';
import SignInMessage from '../sign-in-message/sign-in-message.jsx';
import {funcPropTypes} from '../../prop-types/common.js';

const EMAIL_REGEX = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const PASSWORD_REGEX = /\s/;

const INVALID_EMAIL_MESSAGE = 'Please enter a valid email address';
const INVALID_PASSWORD_MESSAGE = 'Please enter password without whitespaces';

const validateEmail = (ref) => EMAIL_REGEX.test(ref.current.value);
const validatePassword = (ref) => ref.current.value.length > 0 && !PASSWORD_REGEX.test(ref.current.value);

function SignInForm({onSubmit}) {
  const [isValidEmail, setEmailValidationStatus] = useState(true);
  const [isValidPassword, setPasswordValidationStatus] = useState(true);
  const loginRef = useRef();
  const passwordRef = useRef();

  const invalidMessage = isValidEmail ? INVALID_PASSWORD_MESSAGE : INVALID_EMAIL_MESSAGE;

  const handleFormSubmit = () => {
    const validEmail = validateEmail(loginRef);
    const validPassword = validatePassword(passwordRef);
    setEmailValidationStatus(validEmail);
    setPasswordValidationStatus(validPassword);
    if (validEmail && validPassword) {
      onSubmit({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <form
      action="#"
      className="sign-in__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleFormSubmit();
      }}
    >
      {
        !isValidEmail || !isValidPassword ? <SignInMessage text={invalidMessage}/> : ''
      }
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input
            ref={loginRef}
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
            ref={passwordRef}
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
  );
}

SignInForm.propTypes = {
  onSubmit: funcPropTypes.isRequired,
};

export default SignInForm;
