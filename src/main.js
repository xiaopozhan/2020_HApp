import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '../public/css/reset.css';
import '../public/iconfont/iconfont.css'
import fastclick from 'fastclick';
fastclick.attach(document.body)
//引入fastclick解决移动端点击 延迟0.3秒
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);
//引入京东的移动端ui
import '../public/css/mystyle.css'
// 引入自己的css样式
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
