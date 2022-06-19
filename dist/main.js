"use strict";

var _chalk = _interopRequireDefault(require("chalk"));

var _create = _interopRequireDefault(require("./libs/create"));

var _ora = _interopRequireDefault(require("ora"));

var _minimist = _interopRequireDefault(require("minimist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  program
} = require('commander');

const Inquirer = require('inquirer');

const figlet = require('figlet');

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '');
} // commander passes the Command object itself as options,
// extract only actual options into a fresh object.


function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, '')); // if an option is not present and Command has a method with the same name
    // it should not be copied

    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key];
    }
  });
  return args;
}

program.name('jvue-cli').version(`jvue-cli ${require('../package.json').version}`, '-v,--version', 'output the version number').usage('<command> [options]');
program.name('jvue-cli').command('create <project-name>').option('-f, --force', 'overwrite target directory if it exists').description('create a new project').action((name, options, command) => {
  console.log(options);
  const opts = cleanArgs(command);
  console.log(opts); // console.log(command)

  if ((0, _minimist.default)(process.argv.slice(3))._.length > 1) {
    console.log(_chalk.default.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'));
  } // 创建项目
  // create(name,options)

});
program.command('config [value]').description('inspect and modify the config').option('-g, --get <path>', 'get value from option').option('-s, --set <path> <value>', 'set option value').option('-d, --delete <path>', 'delete option from config').option('-e, --edit', 'open config with default editor').option('--json', 'outputs JSON result only').action((name, options, command) => {
  console.log('------', name, options, command.options);
});
program.on('--help', function () {
  console.log(`
run ${_chalk.default.green('jvue <command> --help')} for detailed usage of given commnad`); // 美化jvue-cli logo

  console.log('\r\n' + figlet.textSync('jvue-cli', {
    font: '3D-ASCII',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 300,
    whitespaceBreak: true
  }, function (err, data) {
    if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }

    console.log(data);
  }));
});
program.parse(process.argv);