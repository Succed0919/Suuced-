/* eslint-disable no-param-reassign */
import request from './request';

export default {
  install(_) {
    _.prototype.$http = request;
  },
};
