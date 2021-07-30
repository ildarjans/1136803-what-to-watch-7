import {AuthStatus} from '../../const.js';
import {userReducer} from './user-reducer.js';
import {
  authorizationFail,
  authorizationSuccess,
  logoutUserFail,
  logoutUserSuccess,
  sendAuthorizationRequest,
  setAuthorizationStatus,
  setUserLoginProfile
} from './user-action.js';

describe('user action', () => {
  let state;
  beforeEach(() => {
    state = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: false,
      user: {},
    };
  });
  it('Without parameters return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(state);
  });
  it('Action \'sendAuthorizationRequest\' return correct state', () => {
    const expectedState = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: true,
      user: {},
    };
    expect(userReducer(state, sendAuthorizationRequest())).toEqual(expectedState);
  });
  it('Action \'setAuthorizationStatus\' return correct state', () => {
    const authorizationStatus = 'AUTHORIZED';
    const expectedState = {
      authorizationStatus,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: false,
      user: {},
    };
    expect(userReducer(state, setAuthorizationStatus(authorizationStatus))).toEqual(expectedState);
  });
  it('Action \'authorizationSuccess\' return correct state', () => {
    const expectedState = {
      authorizationStatus: AuthStatus.AUTHORIZED,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: false,
      user: {},
    };
    expect(userReducer(state, authorizationSuccess(AuthStatus.AUTHORIZED))).toEqual(expectedState);
  });
  it('Action \'authorizationFail\' return correct state', () => {
    const authorizationErrorMessage = 'bad request error message';
    const expectedState = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage,
      waitingAuthorizationResponse: false,
      user: {},
    };
    expect(userReducer(state, authorizationFail(authorizationErrorMessage))).toEqual(expectedState);
  });
  it('Action \'setUserLoginProfile\' return correct state', () => {
    const user = {
      id: 1,
      email: 'example@hotmail.com',
      name: 'Billy Johns',
      avatar_url: 'pirates.com/avatars/billy.img', // eslint-disable-line
      token: 'af301ff01',
    };
    const adaptedUser = {
      id: '1',
      email: 'example@hotmail.com',
      name: 'Billy Johns',
      avatarUrl: 'pirates.com/avatars/billy.img',
      token: 'af301ff01',
    };
    const expectedState = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: false,
      user: adaptedUser,
    };
    expect(userReducer(state, setUserLoginProfile(user))).toEqual(expectedState);
  });
  it('Action \'logoutUserSuccess\' return correct state', () => {
    const expectedState = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage: '',
      waitingAuthorizationResponse: false,
      user: {},
    };
    expect(userReducer(state, logoutUserSuccess())).toEqual(expectedState);
  });
  it('Action \'logoutUserFail\' return correct state', () => {
    const logoutErrorMessage = 'bad logout attempt error message';
    const expectedState = {
      authorizationStatus: AuthStatus.NO_AUTHORIZED,
      authorizationErrorMessage: logoutErrorMessage,
      waitingAuthorizationResponse: false,
      user: {},
    };
    expect(userReducer(state, logoutUserFail(logoutErrorMessage))).toEqual(expectedState);
  });
});
