import {ActionType} from '../action-type.js';
import {
  authorizationFail,
  authorizationSuccess, logoutUserFail,
  logoutUserSuccess,
  sendAuthorizationRequest,
  setAuthorizationStatus, setUserLoginProfile
} from './user-action.js';

describe('user action', () => {
  it('Action creator \'authorizationSuccess\' return correct action', () => {
    const expectedAction = {
      type: ActionType.AUTHORIZATION_SUCCESS,
    };
    expect(authorizationSuccess()).toEqual(expectedAction);
  });
  it('Action creator \'logoutUserSuccess\' return correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT_USER_SUCCESS,
    };
    expect(logoutUserSuccess()).toEqual(expectedAction);
  });
  it('Action creator \'sendAuthorizationRequest\' return correct action', () => {
    const expectedAction = {
      type: ActionType.SEND_AUTHORIZATION_REQUEST,
    };
    expect(sendAuthorizationRequest()).toEqual(expectedAction);
  });
  it('Action creator \'authorizationFail\' return correct action', () => {
    const payload = 'authorization fail error message';
    const expectedAction = {
      type: ActionType.AUTHORIZATION_FAIL,
      payload,
    };
    expect(authorizationFail(payload)).toEqual(expectedAction);
  });
  it('Action creator \'setAuthorizationStatus\' return correct action', () => {
    const payload = 'authorization status';
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_STATUS,
      payload,
    };
    expect(setAuthorizationStatus(payload)).toEqual(expectedAction);
  });
  it('Action creator \'setUserLoginProfile\' return correct action', () => {
    const payload = 'user information';
    const expectedAction = {
      type: ActionType.SET_USER_LOGIN_PROFILE,
      payload,
    };
    expect(setUserLoginProfile(payload)).toEqual(expectedAction);
  });
  it('Action creator \'logoutUserFail\' return correct action', () => {
    const payload = 'user logout error message';
    const expectedAction = {
      type: ActionType.LOGOUT_USER_FAIL,
      payload,
    };
    expect(logoutUserFail(payload)).toEqual(expectedAction);
  });
});
