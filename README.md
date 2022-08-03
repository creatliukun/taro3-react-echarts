# taro3x 脚手架安装及使用

## CLI 工具安装

```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli
# 使用 yarn 安装 CLI
yarn global add @tarojs/cli
```

## 使用命令创建模板项目

```bash
taro init myApp
```

## 项目结构目录
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.js index 页面配置
|   |
|   ├── app.js                  项目入口文件
|   ├── app.css                 项目总通用样式
|   └── app.config.js           项目入口配置
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             字节跳动小程序项目配置 project.tt.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.qq.json
|
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json

## 在微信小程序中使用 ECharts

[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目提供了一个小程序组件，用这种方式可以方便地使用 ECharts


