import downloadGitRepo from 'download-git-repo'
const util = require('util')
const download = util.promisify(downloadGitRepo)
const downloadGit = (...args)=>{
    return download(...args)
}
export default downloadGit