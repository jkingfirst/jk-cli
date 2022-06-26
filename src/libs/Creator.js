import {repositoryInfo} from "../api/repository";
import inquirer from 'inquirer'
import ora from "ora";
import chalk from "chalk";
import downloadGit from './downloadGitRepo'
import fs from 'fs-extra'
import symbols from 'log-symbols'
class Creator{
    constructor(projectName,targetDir) {
        this.projectName = projectName
        this.targetDir = targetDir
    }
    async create(){
        console.log(this.targetDir)
        let reponsitoryList = await repositoryInfo()
        let reps = []
            reponsitoryList.forEach(item => {
            if(item.name === 'eleme-App'){
                reps.push(item.name)
            }
        })
        const answer = await inquirer.prompt([
            {
                name: 'author',
                message: 'Please enter the author name: '
            },
            {
                name: 'description',
                message: 'Please enter the project description: '
            },
        ])
        const {template} = await inquirer.prompt({
            name: 'template',
            type:'list',
            message: '请选择模板',
            choices:reps,
        })
        const spinner = ora(chalk.green('🚀 🚀 🚀 download...')).start();
        try{
            await downloadGit(`jkingfirst/${template}`,this.targetDir)
            spinner.succeed()
        } catch (e) {
            console.log(`${symbols.error}`,e)
        }
        let fileName = `${this.projectName}/package.json`
        const jsonObj = await fs.readJson(fileName)
        jsonObj.name = this.projectName
        jsonObj.author = answer.author
        jsonObj.description = answer.description
        try{
            await fs.writeJson(fileName, jsonObj,{
                spaces: 2,
                EQL: '\n'
            })
        }catch (e){
            console.log(e)
        }
        console.log(symbols.success, chalk.green(`You successfully create ${chalk.cyan(this.projectName)} `));
        console.log(`\n cd ${chalk.cyan(this.projectName)}`)
        console.log('\n\r npm install')
        console.log('\n\r npm run serve')
    }
}
module.exports = Creator