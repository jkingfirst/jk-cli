import globalAxios from "../libs/request";
const api = {
    repositoryInfo: 'https://api.github.com/users/jkingfirst/repos'
}
export const repositoryInfo = ()=>{
    return globalAxios(api.repositoryInfo,{
        method: 'get'
    })
}