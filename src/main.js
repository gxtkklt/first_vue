// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'
// import './utils/axios'   //引出去了而已


Vue.prototype.$ts= axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */


//注意 要在 new Vue 之前
//添加请求拦截器
axios.interceptors.request.use(function (config) {

  config.headers['suucc']='asdadasdsdasds';  // headers 是个json串
  //config.headers.ssuucc='asdadasdsdasds';  这样添加一样的
  // 在发送请求之前做些什么
  return config

}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response

}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})





