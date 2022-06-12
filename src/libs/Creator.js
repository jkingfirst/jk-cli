import {repositoryInfo} from "../api/repository";
import inquirer from 'inquirer'
import ora from "ora";
class Creator{
    constructor(projectName,options) {
        this.projectName = projectName
        this.options = options
    }
    async create(){
        // console.log(this.projectName, this.options)
        let reponsitoryList = await repositoryInfo()
        let reps = reponsitoryList.map(item=>item.name)
        const {template} = inquirer.prompt({
            name: 'template',
            type:'list',
            message: '请选择模板',
            choices:reps
        })
    }
}
module.exports = Creator