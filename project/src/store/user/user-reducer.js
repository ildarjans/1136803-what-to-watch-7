import {createReducer} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';
import {AuthStatus} from '../../const.js';
import {adaptUserToClient} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTHORIZED,
  waitingAuthorizationResponse: false,
  user: {},
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionType.SEND_AUTHORIZATION_REQUEST, (state, action) => {
      state.waitingAuthorizationResponse = true;
      state.authorizationError = null;
    })
    .addCase(ActionType.SET_AUTHORIZATION_STATUS, (state, action) => {
      state.waitingAuthorizationResponse = false;
      state.authorizationStatus = action.payload;
    })
    .addCase(ActionType.AUTHORIZATION_SUCCESS, (state, action) => {
      state.waitingAuthorizationResponse = false;
      state.authorizationError = null;
      state.authorizationStatus = AuthStatus.AUTHORIZED;
    })
    .addCase(ActionType.AUTHORIZATION_FAIL, (state, action) => {
      state.waitingAuthorizationResponse = false;
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.authorizationError = action.payload;
      state.user = {};
    })
    .addCase(ActionType.SET_USER_LOGIN_PROFILE, (state, action) => {
      state.user = adaptUserToClient(action.payload);
    })
    .addCase(ActionType.LOGOUT_USER_SUCCESS, (state, action) => {
      state.authorizationStatus = AuthStatus.NO_AUTHORIZED;
      state.user = {};
    })
    .addCase(ActionType.LOGOUT_USER_FAIL, (state, action) => {
      state.authorizationError = action.payload;
    });
});

