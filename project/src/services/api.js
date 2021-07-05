import axios from 'axios';

const URL = 'https://7.react.pages.academy/wtw';
const TIMEOUT = 5000;


export default () => {
  const api = axios.create({
    baseURL: URL,
    timeout: TIMEOUT,
    headers: {
      'x-token': localStorage.getItem('token') ?? '',
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
