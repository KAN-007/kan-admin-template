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
