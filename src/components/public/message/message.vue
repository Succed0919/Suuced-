<template>
  <transition name="slide">
    <div v-if="visible" :class="['message-container', `message-${type}`]">
      <i :class="['iconfont', `icon-${type}`]"></i>
      <span>
        <span v-if="msg">{{msg}}</span>
        <span v-else><slot></slot></span>
      </span>
      <span @click="closeMySelf">X</span>
    </div>
  </transition>
</template>

<script>
import './style/iconfont.css';

export default {
  name: 'message',
  methods: {
    closeMySelf() {
      this.$emit('update:visible', false);
    },
  },
  props: {
    msg: {
      type: String,
    },
    delay: {
      type: Number,
      default: 500,
    },
    type: {
      type: String,
      default: 'info',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        setTimeout(() => {
          this.$emit('update:visible', false);
        }, this.delay);
      }
    },
  },
};
</script>

<style scoped lang="scss">
  $info: #abdcff;
  $info-background: #f0faff;
  $success: #8ce6b0;
  $success-background: #edfff3;
  $warning: #ffd77a;
  $warning-background: #fff9e6;
  $error: #ffb08f;
  $error-background: #ffefe6;
  $font-color: #515a6e;
  .message-container{
    user-select: none;
    width: 280px;
    line-height: 34px;
    font-size: 12px;
    border-radius: 4px;
    color: $font-color;
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    transform: translate(0, 50px);
    margin: auto;
    text-indent: 1em;
    word-spacing: 10px;
    span,i{
      vertical-align: middle;
    }
  }
  .message-info{
    border: 1px solid $info;
    background: $info-background;
  }
  .message-success{
    border: 1px solid $success;
    background: $success-background;
  }
  .message-warning{
    border: 1px solid $warning;
    background: $warning-background;
  }
  .message-error{
    border: 1px solid $error;
    background: $error-background;
  }
  .slide-enter, .slide-leave-to {
    transform: translate(0, -50px);
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .3s ease-in-out;
  }
  .slide-enter-to, .slide-leave {
    transform: translate(0, 50px);
  }
</style>
