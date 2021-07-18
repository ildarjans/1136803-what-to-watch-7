import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';
import {AuthStatus} from '../../const.js';
import {adaptUserToClient} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTHORIZED,
  authorizationErrorMessage: '',
  waitingAuthorizationResponse: false,
  user: {},
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.SEND_AUTHORIZATION_REQUEST, (state) => {
      state.authorizationErrorMessage = '';
      state.waitingAuthorizationResponse = true;
    })
    .addCase(ActionType.SET_AUTHORIZATION_STATUS, (state, action) => {
      state.waitingAuthorizationResponse = false;
      state.authorizationStatus = action.payload;
    })
    .addCase(ActionType.AUTHORIZATION_SUCCESS, (state) => {
      state.authorizationStatus = AuthStatus.AUTHORIZED;
      state.waitingAuthorizationResponse = false;
    })
    .addCase(ActionType.AUTHORIZATION_FAIL, (state, action) => {
      state.authorizationErrorMessage = action.payload.message;
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.waitingAuthorizationResponse = false;
      state.user = {};
    })
    .addCase(ActionType.SET_USER_LOGIN_PROFILE, (state, action) => {
      state.user = adaptUserToClient(action.payload);
    })
    .addCase(ActionType.LOGOUT_USER_SUCCESS, (state) => {
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.user = {};
    })
    .addCase(ActionType.LOGOUT_USER_FAIL, (state, action) => {
      state.authorizationErrorMessage = action.payload;
    });
});

