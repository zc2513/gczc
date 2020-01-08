# template

> 基于 `vue-cli` 构建 - 只包含 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。   

# 进入项目目录
cd xxx

# 安装依赖 - 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org / nrm use taobao(建议使用nrm指定镜像)
npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass
npm install  

# 启动服务
npm run dev 

## 发布

```bash 
# 构建生产环境--构建到当前跟目录下
    npm run build:prod
# 构建生产环境--构建到vs2015后台项目对应目录下（***需要在settings.js paths对象写入自己的git名称及自己项目的路径，否则不能使用）
    npm run build:outher
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
``` 
 

## 浏览器支持

现代浏览器和Internet Explorer 10+。
Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions  