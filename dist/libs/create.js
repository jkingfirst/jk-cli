"use strict";

const fs = require('fs-extra');

const path = require('path');

const inquirer = require('inquirer');

const chalk = require('chalk');

const validateProjectName = require('validate-npm-package-name');

const Creator = require('../libs/Creator');

async function create(projectName, options) {
  // 当前根目录
  const cwd = options.cwd || process.cwd(); // 是否要在当前目录生成项目

  const inCurrent = projectName === '.';
  const name = inCurrent ? path.relative('../', cwd) : projectName;
  const targetDir = path.resolve(cwd, projectName);
  console.log(targetDir);
  console.log(path.relative('../', cwd), '-----');
  const result = validateProjectName(name);

  if (!result.validForNewPackages) {
    // 项目名是否合法
    console.error(chalk.red(`Invalid project name: "${name}"`));
    result.errors && result.errors.forEach(err => {
      console.error(chalk.red.dim('Error: ' + err));
    });
    result.warnings && result.warnings.forEach(warn => {
      console.error(chalk.red.dim('Warning: ' + warn));
    });
  }

  if (fs.existsSync(targetDir)) {
    if (options.force) {
      fs.remove(targetDir);
    } else {
      if (inCurrent) {
        const {
          ok
        } = await inquirer.prompt([{
          name: 'ok',
          type: 'confirm',
          message: 'Generate project in current directory?'
        }]);

        if (!ok) {
          return false;
        }
      } else {
        const {
          action
        } = await inquirer.prompt([{
          name: 'action',
          type: 'list',
          message: `Target directory ${chalk.cyan(targetDir)} is already exist Pick an action.`,
          choices: [{
            name: 'Overwrite',
            value: 'overwrite'
          }, {
            name: 'Merge',
            value: 'merge'
          }, {
            name: 'Cancel',
            value: false
          }]
        }]);

        if (!action) {
          return false;
        } else if (action === 'overwrite') {
          console.log(`\nRemoving ${chalk.cyan(targetDir)}...`);
          await fs.remove(targetDir);
        }
      }
    }
  }

  const create = new Creator(targetDir, options);
  create.create();
}

module.exports = (...args) => {
  return create(...args);
};