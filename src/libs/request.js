import axios from 'axios'
let globalAxios = axios.create({
    baseURL: '',
    timeout:10000,
})
globalAxios.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})
globalAxios.interceptors.response.use((res)=>{
    let data = res.data
    return data
},err=>{
    return Promise.reject(err)
})