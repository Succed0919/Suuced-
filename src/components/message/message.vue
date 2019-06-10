<template>
  <transition name="slide">
    <div v-if="visible" class="message-container" :class="{'center': center}">
      <div :class="['left-bor', `left-${type}`]"></div>
      <i :class="['iconfont', `icon-${type}`]"></i>
      <span v-text="msg"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
  data() {
    return { //  这是定义空的值进行转换
    };
  },
  methods: {
    del() {
      this.visible = false;
    },
  },
  created() {}, // 页面加载前
  mounted() { //  页面加载后要启动定时器
    if (this.delay) {
      this.timer = setTimeout(() => {
        this.visible = false; // 在页面加载后执行定时器，过了几秒后将组件删除
      }, this.delay);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer); //  在生命周期销毁前，清除定时器
  },
};
</script>

<style scoped lang="scss">
  .message-container{
    font-size: 10px;
    margin:auto;
    padding: 10px;
    width: 200px;
    line-height: 2;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    overflow: hidden;
    border: 1px solid #cccccc;
    background: #ffffff;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-radius: 10px;
    .left-bor{
      width: 6px;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }
    .del{
      cursor: pointer;
      color: #666666;
      position: absolute;
      right: 10px;
    }
  }
  .center{
    text-align: center;
  }
  $type_2: (
    info:(background:#39f),
    success:(background:#0c6),
    warning:(background:#f90),
    error:(background:#f30)
  );
  @each $m in map_keys($type_2) {
    .left-#{$m}{
      background-color: map_get(map_get($type_2,$m), background);
    }
  };
  .slide-enter, .slide-leave-to {
    transform: translate(0,-400px);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-enter-to, .slide-leave {
    transform: translate(0,400px);
  }
</style>
