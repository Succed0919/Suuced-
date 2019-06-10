import Vue from 'vue';
import elNotice from './el-notice';//  导入notice组件模板

const VueOfNotice = Vue.extend(elNotice); // 生成定制版的notice vue构造函数

let index = 1; // 计数器
export const Notice = (config) => {
  const noticeInstance = new VueOfNotice({
    data() {
      return {
        message: config.message,
        type: config.type,
        timeout: config.timeout,
      };
    },
  });
  noticeInstance.id = `notice-${index += 1}`;
  noticeInstance.vm = noticeInstance.$mount();//  产生能被浏览器识别的html节点[vm.$el]
  noticeInstance.vm.$el.style.cssText = `z-index: ${999 + index}`;
  document.body.appendChild(noticeInstance.vm.$el);//  把组件编译好的html结构插入到body
};
export default {
  /*  eslint-disable  */
  install(Vue) {
    Vue.prototype.$notice = Notice;//  将方法导入Vue实例的原型上去  便于通过this调用组件
  },
};
