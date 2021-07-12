import {ActionType} from '../action-type.js';
import {AuthStatus} from '../../const.js';
import {adaptUserToClient, extend} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthStatus.NO_AUTHORIZED,
  waitingAuthorizationResponse: false,
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case (ActionType.SEND_AUTHORIZATION_REQUEST): {
      return extend(state, {
        waitingAuthorizationResponse: true,
        authorizationError: null,
      });
    }
    case (ActionType.SET_AUTHORIZATION_STATUS): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: action.payload,
      });
    }
    case (ActionType.AUTHORIZATION_SUCCESS): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: AuthStatus.AUTHORIZED,
        authorizationError: null,
      });
    }
    case (ActionType.AUTHORIZATION_FAIL): {
      return extend(state, {
        waitingAuthorizationResponse: false,
        authorizationStatus: AuthStatus.NO_AUTHORIZED,
        authorizationError: action.payload,
        user: {},
      });
    }
    case (ActionType.SET_USER_LOGIN_PROFILE): {
      return extend(state, {
        user: adaptUserToClient(action.payload),
      });
    }
    case (ActionType.LOGOUT_USER_SUCCESS): {
      return extend(state, {
        authorizationStatus: AuthStatus.NO_AUTHORIZED,
        user: {},
      });
    }
    case (ActionType.LOGOUT_USER_FAIL): {
      return extend(state, {
        authorizationError: action.payload,
      });
    }
  }
  return state;
};
