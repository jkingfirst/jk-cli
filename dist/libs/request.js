"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let globalAxios = _axios.default.create({
  baseURL: '',
  timeout: 10000
});

globalAxios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});
globalAxios.interceptors.response.use(res => {
  let data = res.data;
  return data;
}, err => {
  return Promise.reject(err);
});
var _default = globalAxios;
exports.default = _default;