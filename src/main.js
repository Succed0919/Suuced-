import Vue from 'vue';
import App from './App';
import router from './router';
import http from './http';
// import message from './components/public/message';
import notice from './components/public/el-notice';
// eslint-disable-next-line import/first
import { Tab, Tabs, Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);
Vue.use(notice);
Vue.use(http);
Vue.use(Tab).use(Tabs);
/*  eslint-disable  */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
