import axios from 'axios';

const URL = 'https://7.react.pages.academy/wtw';
const TIMEOUT = 5000;

const HttpErrorCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export default (onUnauthorized) => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    if (err.response.status === HttpErrorCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
