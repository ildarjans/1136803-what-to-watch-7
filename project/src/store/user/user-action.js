import {ActionType} from '../action-type.js';

export const authorizationSuccess = () => ({
  type: ActionType.AUTHORIZATION_SUCCESS,
});

export const authorizationFail = (err) => ({
  type: ActionType.AUTHORIZATION_FAIL,
  payload: err,
});

export const sendAuthorizationRequest = () => ({
  type: ActionType.SEND_AUTHORIZATION_REQUEST,
});

export const setAuthorizationStatus = (authStatus) => ({
  type: ActionType.SET_AUTHORIZATION_STATUS,
  payload: authStatus,
});

export const setUserLoginProfile = (userInfo) => ({
  type: ActionType.SET_USER_LOGIN_PROFILE,
  payload: userInfo,
});

export const logoutUserSuccess = () => ({
  type: ActionType.LOGOUT_USER_SUCCESS,
});

export const logoutUserFail = (err) => ({
  type: ActionType.LOGOUT_USER_FAIL,
  payload: err,
});
