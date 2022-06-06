const {program} = require('commander')
import chalk from "chalk";
const Inquirer = require('inquirer')
import create from "./libs/create";
import ora from 'ora'
function camelize (str) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs (cmd) {
    const args = {}
    cmd.options.forEach(o => {
        const key = camelize(o.long.replace(/^--/, ''))
        // if an option is not present and Command has a method with the same name
        // it should not be copied
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key]
        }
    })
    return args
}

program
    .name('jk-cli')
    .version(`jk-cli ${require('../package.json').version}`,'-v,--version', 'output the version number')
    .usage('<command> [options]')
program
    .name('jk-cli')
    .command('create <project-name>')
    .option('-f, --force', 'overwrite target directory if it exists')
    .description('create a new project')
    .action((name,cmd)=>{
        create(name,cmd)
    })
program
    .command('config [value]')
    .description('inspect and modify the config')
    .option('-g, --get <path>', 'get value from option')
    .option('-s, --set <path> <value>', 'set option value')
    .option('-d, --delete <path>', 'delete option from config')
    .option('-e, --edit', 'open config with default editor')
    .option('--json', 'outputs JSON result only')
    .action((name,options,command) => {
        console.log('------', name,options,command.options)
    })
program.on('--help',function(){
console.log(`
run ${chalk.green('jk <command> --help')} for detailed usage of given commnad`)
})
program.parse(process.argv)
/*new Inquirer.prompt([
    {
        name: "vue",
        // 多选交互功能
        // 单选将这里修改为 list 即可
        type: "list",
        message: "Check the features needed for your project:",
        choices: [
            {
                name: "Babel",
                checked: true,
            },
            {
                name: "TypeScript",
            },
            {
                name: "Progressive Web App (PWA) Support",
            },
            {
                name: "Router",
            },
        ],
    },
]).then((data) => {
    console.log(data);
});

const spinner = ora(chalk.green('Loading unicorns')).start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 5000);*/