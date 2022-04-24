import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/*
sass的变量，只能组件需要的时候，以import的方式引入。
main.js中引入的sass文件，可以作为全局样式。全局变量，在webpack看来，是无法识别的
可以到vue.config.js中配置引入全局样式
https://cli.vuejs.org/zh/guide/css.html#css-modules
*/
// import './styles/index.scss' // global css

import App from './App' // 根组件
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
