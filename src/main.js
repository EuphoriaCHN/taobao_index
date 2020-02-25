// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '@/assets/styles/global.less';

import $ from 'jquery';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  created() {
    // const targetW = 1280;
    // const scale = window.screen.width / targetW;
    // const meta = document.createElement('meta');
    // meta.name = "viewport";
    // meta.content = "initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale + ",user-scalable=no";
    // document.head.appendChild(meta);
    // console.log(1);
  }
})
