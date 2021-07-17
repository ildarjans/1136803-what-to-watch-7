import {ActionType} from '../store/action-type.js';
import {browserHistory} from '../browser-history.js';

export const redirect = () => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }
  return next(action);
};
