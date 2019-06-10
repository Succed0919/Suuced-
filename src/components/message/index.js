import Vue from 'vue'; //  导入vue
import message from './message'; //  导入message

// 这是第一个页面的扩展函数
const VueTest = Vue.extend(message); //  将message扩展到Vue原型里面
function createTest(opt) { //  写函数将变为可以控制的值(用户传值||默认值)
  const vm = new VueTest({ //  实例化这个扩展功能
    data() { //  数据模型
      return { // 数据将message的值由这里进行转换传值，否则就是默认值
        visible: opt.visible || false,
        type: opt.type || 'info',
        msg: opt.msg || '这是一个标题',
        delay: opt.delay || 4000,
        center: opt.center || false,
      };
    },
  });
  vm.$mount(); //  将生成的$el(html) 生成
  document.body.appendChild(vm.$el); //  将$el挂载到body上面
}
export default {
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$message = createTest; //  将写完的方法挂载到Vue原型上面 （$message改变值的接口）
  },
};
