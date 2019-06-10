<template>
  <div class="register" style="position: absolute; width: 100vw; height: 50vh">
    <input type="text" v-model="usr.phoneNumber" placeholder="请输入手机号">
    <input type="password" placeholder="请输入6-12位密码">
    <input type="text" placeholder="请输入验证码">
    <span class="code" @click="getValidCode">获取验证码</span>
    <img src="./img/cunzheng_suss.png">
    <p class="shopping">我已阅读并同意<span>《商城销售合同》</span></p>
    <button>注册</button>
  </div>
</template>
<script>
/* eslint-disable no-console */

export default {
  name: 'register',
  data() {
    return {
      isshow: null,
      usr: {
        phoneNumber: '',
      },
    };
  },
  methods: {
    getValidCode() {
      this.$http.validCode(this.usr.phoneNumber)
        .then((res) => {
          console.log(res);
          // if (res.data.data.code = 1001) {
          //   this.$notice({
          //     message: '操作过于频繁,休息一会儿~',
          //     timout: 400,
          //     type: 'warning',
          //   });
          // }
          // if (res.data.data.code = 1002) {
          //   this.$notice({
          //     message: '验证码发送成功,注意查收!',
          //     timout: 300,
          //     type: 'success',
          //   });
          // }
          // if (res.data.data.code = 1003) {
          //   this.$notice({
          //     message: '参数不合法!',
          //     timout: 400,
          //     type: 'error',
          //   });
          // }
        })
        .catch(err => console.log(err));
    },
  },
};
</script>

<style scoped lang="scss">
.register{
  margin-top: 20px;
  input{
    width: 100%;
    border: none;
    outline: none;
    text-indent: 25px;
    margin: 20px auto;
    border-width: 0 0 1px 0;
    line-height: 50px;
    font-size: 30px;
    position: relative;
  }
  .code {
    cursor: pointer;
    position: absolute;
    left: 550px;
    top: 210px;
    font-size: 24px;
    color: dodgerblue;
  }
  img{
    cursor: pointer;
    width: 60px;
    vertical-align: middle;
    display: inline-block;
  }
  .shopping{
    font-size: 26px;
    vertical-align: middle;
    display: inline-block;
    span{
      cursor: pointer;
      color: blue;
    }
  }
  button{
    cursor: pointer;
    display: block;
    border: none;
    background: dodgerblue;
    color: #fff;
    padding: 20px 0;
    border-radius: 30px;
    text-align: center;
    width: 80%;
    margin: 50px auto;
  }
}
</style>
