import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const.js';
import {adaptUserToClient} from '../../utils.js';
import {
  authorizationFail,
  authorizationSuccess,
  logoutUserFail,
  logoutUserSuccess,
  sendAuthorizationRequest,
  setAuthorizationStatus,
  setUserLoginProfile
} from './user-action.js';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTHORIZED,
  authorizationErrorMessage: '',
  waitingAuthorizationResponse: false,
  user: {},
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(sendAuthorizationRequest, (state) => {
      state.authorizationErrorMessage = '';
      state.waitingAuthorizationResponse = true;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.waitingAuthorizationResponse = false;
      state.authorizationStatus = action.payload;
    })
    .addCase(authorizationSuccess, (state) => {
      state.authorizationStatus = AuthStatus.AUTHORIZED;
      state.waitingAuthorizationResponse = false;
    })
    .addCase(authorizationFail, (state, action) => {
      state.authorizationErrorMessage = action.payload;
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.waitingAuthorizationResponse = false;
      state.user = {};
    })
    .addCase(setUserLoginProfile, (state, action) => {
      state.user = adaptUserToClient(action.payload);
    })
    .addCase(logoutUserSuccess, (state) => {
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.user = {};
    })
    .addCase(logoutUserFail, (state, action) => {
      state.authorizationErrorMessage = action.payload;
    });
});

