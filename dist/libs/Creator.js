"use strict";

var _repository = require("../api/repository");

var _inquirer = _interopRequireDefault(require("inquirer"));

var _ora = _interopRequireDefault(require("ora"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Creator {
  constructor(projectName, options) {
    this.projectName = projectName;
    this.options = options;
  }

  async create() {
    // console.log(this.projectName, this.options)
    let reponsitoryList = await (0, _repository.repositoryInfo)();
    let reps = reponsitoryList.map(item => item.name);

    const {
      template
    } = _inquirer.default.prompt({
      name: 'template',
      type: 'list',
      message: '请选择模板',
      choices: reps
    });
  }

}

module.exports = Creator;