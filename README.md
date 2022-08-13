# jvue cli ![Build Status](https://img.shields.io/static/v1?label=jvue-cli&message=前端自定义脚手架&color=<COLOR>) 

##当前环境

目前很多公司，基本都有一套项目流程，例如模板选择，约定式路由，集合微前端服务，提供可拔插的功能插件如（埋点，权限），网络请求方面的封装，代码格式（eslint,prettier）,约定时提交，国际化，发布等等，当我们用copy paste 项目的时候，会出现很多问题

* 重复性的劳动，琐碎而且既浪费时间
* 很容易忽略项目中的各种配置
* copy会有很多重复代码


## 问题：

当我们创建一个新的项目，可能需要的初始化工作：

*选择包管理工具，初始化 package.json 文件                                                                                                           
*查找项目引用的框架依赖和工具依赖包，并逐一安装相关的包

*针对已安装的包分别写对应的配置

*配置本地 web server，代理静态资源文件

##解决方案
jvue 快速创建一套vue自定义模板或者UNIAPP模板,从而减少不必要的重复工作，极大提高了开发效率

##jvue

create命令
```
juve create <项目名称>

cd <项目目录>

npm install
```

help 命令
```
jvue -h

jvue --help
```
config 命令
```
jvue --config

```


