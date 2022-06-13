"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _downloadGitRepo = _interopRequireDefault(require("download-git-repo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const util = require('util');

const download = util.promisify(_downloadGitRepo.default);

const downloadGit = (...args) => {
  return download(...args);
};

var _default = downloadGit;
exports.default = _default;