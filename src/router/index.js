import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({ routes });

// router.beforeEach((to, from, next) => {
//   this.app.$notice({
//     message: 'hello,world',
//     type: 'primary',
//     timeout: 3000,
//   });
//   if (to.matched.some(value => value.meta.notice)) {
//     const isEnter = confirm('蔡徐坤正在专心运球，没时间？');
//     if (isEnter) {
//       next('/personal');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
