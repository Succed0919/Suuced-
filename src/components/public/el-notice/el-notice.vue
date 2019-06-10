<template>
  <transition name="drop" appear>
    <div class="el-notice_primary" v-if="isShow">
      <i></i>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'el-notice',
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
    timer: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.timer = setTimeout(() => { this.isShow = false; }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
  .el-notice_primary{
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    background: #f0f9eb;
    line-height: 48px;
    width: 380px;
    border-radius: 4px;
    border: 1px solid #e1f3d8;
    color: #67c23a;
    margin: auto;
    padding-left: 24px;
    box-sizing: border-box;
    i{
      vertical-align: middle;
      display: inline-block;
      width: 16px;
      height: 16px;
    }
    span{
      line-height: 16px;
      font-size: 14px;
    }
  }

  .drop-enter{
    top: -40px;
    opacity: 0;
  }
  .drop-enter-active{
    transition: all .2s ease-in-out;
  }
  .drop-enter-to{
    top: 24px;
    opacity: 1;
  }
  .drop-leave{
    top: 24px;
    opacity: 1;
  }
  .drop-leave-active{
    transition: all .3s ease-in;
  }
  .drop-leave-to{
    top: -40px;
    opacity: 0;
  }
</style>
