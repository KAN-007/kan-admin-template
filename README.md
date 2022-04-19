# kan-admin-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 第一步创建一个vue项目
node环境 14.16.1

npm查看某个包的所有版本 npm view element-ui versions
npm安装某个报的指定版本 npm install element-ui@2.13.2


完整引入element-ui


发现一个VSCode很好用的快捷键 Ctrl + G 查找文件或定位到某行


删除某个包 https://blog.csdn.net/qq_35276073/article/details/107530025
npm uninstall xx-abc：删除模块，但不删除模块留在package.json中的对应信息
// 如果是安装在 dependencies
npm uninstall xx-abc --save 删除模块，同时删除模块留在package.json中dependencies下的对应信息
// 如果是安装在 devDependencies
npm uninstall xx-abc --save-dev 删除模块，同时删除模块留在package.json中devDependencies下的对应信息


引入浏览器样式统一化文件

配置vue.config.js


2022/4/14 
开发登录页面

注释类型: 
1、/**/只代表单纯的注释 ，java文档注释

2、/***/ 不仅有注释的功效而且你鼠标放在你注释的方法上面他会把你注释的内容显示出来，

3、只要把鼠标放在你注释的方法或属性上就会显示了

发现一个坑 node-sass在npm install 的时候node版本是11.1.1切到14.16.1跑的时候报错：执行 npm rebuild node-sass

在入口文件main.js引入全局样式index.scss
(1) 引入覆盖element样式


2022/4/16
封装SvgIcon组件

实例属性$listeners、$attrs的用法
选项inheritAttrs的用法   默认情况下父作用域的不被认作 props 的特性绑定 (attribute bindings) 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上 
https://www.jb51.net/article/132371.htm  
https://blog.csdn.net/weixin_42312074/article/details/108994162

下载axios创建一个axios实例
下载mock.js模拟服务器响应请求
配置环境--dev用开发环境，prod用生产环境
https://blog.csdn.net/z12845464/article/details/122188388
https://cli.vuejs.org/zh/guide/mode-and-env.html


2022/4/17
下载js-cookies封装token存储操作
使用axios创建一个xhrSever
根据模块封装接口
封装vuex用户模块
创建mockjs实例模拟后端接口响应
创建404页面

页面layout

2022/4/18
定义布局变量variables.scss
定义样式混入mixin.scss (滚动条、清除浮动、相对定位容器)
引入侧边栏10%

2022/4/19
完成侧边栏
进行到封装SideBarItem组件