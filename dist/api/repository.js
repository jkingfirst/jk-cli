"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repositoryInfo = void 0;

var _request = _interopRequireDefault(require("../libs/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = {
  repositoryInfo: 'https://api.github.com/users/jkingfirst/repos'
};

const repositoryInfo = () => {
  return (0, _request.default)(api.repositoryInfo, {
    method: 'get'
  });
};

exports.repositoryInfo = repositoryInfo;