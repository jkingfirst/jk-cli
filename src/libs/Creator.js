import {repositoryInfo} from "../api/repository";
import inquirer from 'inquirer'
import ora from "ora";
import chalk from "chalk";
import downloadGit from './downloadGitRepo'
class Creator{
    constructor(targetDir,options) {
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
        const spinner = ora(chalk.green('download...')).start();
        await downloadGit(`jkingfirst/${template}`,this.targetDir)
        spinner.succeed()
    }
}
module.exports = Creator