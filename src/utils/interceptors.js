import join from 'url-join';
import * as helper from '../utils/helper';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//

export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

export const requestHandler = request => {
  if (isHandlerEnabled(request)) {
  }
  if (!isAbsoluteURLRegex.test(request.url)) {
    request.url = join(process.env.NEXT_PUBLIC_API_ENDPOINT, request.url);
  }
  request.headers.OAuth = "Jenosize";
  request.timeout = 85000;
  return request;
};

export const successHandler = response => {
  if (isHandlerEnabled(response)) {
  }
  return response;
};

export const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
  }
  return Promise.reject({ ...error });
};