import Axios from 'axios';

import { notify } from '../vendor/notifications';

// Axios instance
export const axios = Axios.create();

// Interceptor callbacks
function requestHandler(request) {
  const { method, url } = request;
  loggerEnabled && console.log(`%c⚡️Request [${method}] ${url}`, styledLog.request);
  return request;
}

function successHandler(request) {
  loggerEnabled && console.log('%c⚡️Response ' + request.status, styledLog.response, request);
  return request;
}

function errorHandler(error) {
  loggerEnabled && console.log('%c⚡️Axios [resp] Failure', styledLog.error, error.message);
  error.message && notify.error({ message: error.message });
  return Promise.reject(error);
}

// Logger
const loggerEnabled = true;
const styledLog = {
  request: 'background:yellow;color:black',
  response: 'background:green;color:#fff;',
  error: 'background:darkred;color:#fff;',
};

// Register interceptors
axios.interceptors.request.use(requestHandler, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);
