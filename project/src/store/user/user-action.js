import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../action-type.js';

export const authorizationSuccess = createAction(ActionType.AUTHORIZATION_SUCCESS);

export const logoutUserSuccess = createAction(ActionType.LOGOUT_USER_SUCCESS);

export const sendAuthorizationRequest = createAction(ActionType.SEND_AUTHORIZATION_REQUEST);

export const authorizationFail = createAction(
  ActionType.AUTHORIZATION_FAIL, (err) => ({
    payload: err,
  }));

export const setAuthorizationStatus = createAction(
  ActionType.SET_AUTHORIZATION_STATUS, (authStatus) => ({
    payload: authStatus,
  }));

export const setUserLoginProfile = createAction(
  ActionType.SET_USER_LOGIN_PROFILE, (userInfo) => ({
    payload: userInfo,
  }));

export const logoutUserFail = createAction(
  ActionType.LOGOUT_USER_FAIL, (err) => ({
    payload: err,
  }));
