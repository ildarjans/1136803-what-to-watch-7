import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

const EMAIL_REGEX = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const PASSWORD_REGEX = /\s/;

const validateEmail = (value) => EMAIL_REGEX.test(value);
const validatePassword = (value) => value.length > 0 && !PASSWORD_REGEX.test(value);

function SignInForm({onSubmit}) {
  const [isValidEmail, setEmailValidationStatus] = useState(true);
  const [isValidPassword, setPasswordValidationStatus] = useState(true);
  const loginRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = () => {
    const validEmail = validateEmail(loginRef.current.value);
    const validPassword = validatePassword(passwordRef.current.value);
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
      noValidate
    >

      {
        (!isValidEmail || !isValidPassword) &&
        (
          <div className="sign-in__message">
            {!isValidEmail && <p>Please enter a valid email address</p>}
            {!isValidPassword && <p>Please enter password without whitespaces</p>}
          </div>
        )
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
  onSubmit: PropTypes.func.isRequired,
};

export default SignInForm;
