/* eslint-disable func-names */
import error from '../errorHandler';
import { Notice } from '../components/public/el-notice';

export default {
  baseURL: 'http://10.10.42.203:8000',
  timeout: 3000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,
  transformResponse: [function (data) {
    Notice(error[JSON.parse(data).code]);
    return data;
  }],
};
