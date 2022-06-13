"use strict";

var _repository = require("../api/repository");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _ora = _interopRequireDefault(require("ora"));

var _chalk = _interopRequireDefault(require("chalk"));

var _downloadGitRepo = _interopRequireDefault(require("./downloadGitRepo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Creator {
  constructor(targetDir, options) {
    this.targetDir = targetDir;
    this.options = options;
  }

  async create() {
    console.log(this.targetDir, this.options);
    let reponsitoryList = await (0, _repository.repositoryInfo)();
    let reps = [];
    reponsitoryList.forEach(item => {
      if (item.name === 'eleme-App') {
        reps.push(item.name);
      }
    });
    const {
      template
    } = await _inquirer.default.prompt({
      name: 'template',
      type: 'list',
      message: '请选择模板',
      choices: reps
    });
    const spinner = (0, _ora.default)(_chalk.default.green('download...')).start();
    await (0, _downloadGitRepo.default)(`jkingfirst/${template}`, this.targetDir);
    spinner.succeed();
  }

}

module.exports = Creator;