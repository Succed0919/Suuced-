import Message from './message';

export default {
  install(Vue) {
    Vue.component(Message.name, Message);
  },
};
