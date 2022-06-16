import {repositoryInfo} from "../api/repository";
import inquirer from 'inquirer'
import ora from "ora";
import chalk from "chalk";
import downloadGit from './downloadGitRepo'
class Creator{
    constructor(projectName,targetDir,options) {
        this.projectName = projectName
        this.targetDir = targetDir
        this.options = options
    }
    async create(){
        console.log(this.targetDir, this.options)
        let reponsitoryList = await repositoryInfo()
        let reps = []
            reponsitoryList.forEach(item => {
            if(item.name === 'eleme-App'){
                reps.push(item.name)
            }
        })
        const {template} = await inquirer.prompt({
            name: 'template',
            type:'list',
            message: '请选择模板',
            choices:reps,
        })
        const spinner = ora(chalk.green('🚀 🚀 🚀 download...')).start();
        await downloadGit(`jkingfirst/${template}`,this.targetDir)
        spinner.succeed()
        console.log(`\n\r 🍦🍦🍦 You successfully create ${chalk.cyan(this.projectName)} `)
        console.log(`\n\r cd ${chalk.cyan(this.projectName)}`)
        console.log('\n\r npm install')
        console.log('\n\r npm run serve')
    }
}
module.exports = Creator