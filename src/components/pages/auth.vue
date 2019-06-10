<template>
  <div class="auth">
    <div class="header">
      <div class="PersonalCenter">个人中心</div>
      <div class="HeadPortrait"></div>
      <span>登录/注册</span>
    </div>
    <div class="Bodily">
      <div class="Care">
        <div class="Concerned">
          <span>0</span><br>
          <span class="text">我的关注</span>
        </div>
        <div class="Concerned">
          <span>0</span><br>
          <span class="text">签到礼金</span>
        </div>
        <div class="Concerned">
          <span>0</span><br>
          <span class="text">优惠券</span>
        </div>
      </div>
      <div class="state">
        <div class="payment">
        <span><img src="./icons/payment.png" alt=""></span><br>
        <span class="text">待付款</span>
      </div>
        <div class="payment">
          <span><img src="./icons/received.png" alt=""></span><br>
          <span class="text">待收货</span>
        </div>
        <div class="payment">
        <span><img src="./icons/completed.png" alt=""></span><br>
        <span class="text">已完成</span>
      </div>
        <div class="more">
        <span><img src="./icons/more.png" alt=""></span><br>
      </div>
        <div class="payment">
        <span><img src="./icons/orders.png" alt=""></span><br>
        <span class="text">全部订单</span>
        </div>
    </div>
      <div class="column">
        <div class="Bargain">
          <span><img src="./icons/payment.png" alt=""></span><br>
          <span class="text">砍价团</span>
        </div>
        <div class="Bargain">
          <span><img src="./icons/received.png" alt=""></span><br>
          <span class="text">新人红包</span>
        </div>
        <div class="Bargain">
          <span><img src="./icons/completed.png" alt=""></span><br>
          <span class="text">一元邀新</span>
        </div>
        <div class="more">
          <span><img></span><br>
        </div>
        <div class="Bargain">
          <span><img src="./icons/completed.png" alt=""></span><br>
          <span class="text">收货地址</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="Guess">
        <div class="Guess_left">
          <span></span>
        </div>
        <div class="Guess_center">猜你喜欢</div>
        <div class="Guess_right">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'auth',
  data() {
    return {
      test: null,
    };
  },
  created() {},
  props: {},
  methods: {
  },
};
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .auth{
    background: #f2f2f2;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    .header{
      background: #eb4f3f;
      height: 550px;
      .PersonalCenter{
        width: 100%;
        height: 100px;
        line-height: 246px;
        text-align: center;
        color: white;
        font-size: 58px;
        font-weight: bold;
      }
      .HeadPortrait{
        display: inline-block;
        width: 177px;
        height: 177px;
        border-radius: 50%;
        background: white;
        position: absolute;
        top: 218px;
        left: 50px ;
      }
      span{
        position: absolute;
        top: 282px;
        display: inline-block;
        width: 258px;
        height: 70px;
        line-height: 70px;
        left: 308px;
        border-radius: 30px;
        border: 1px white solid;
        text-align: center;
        color: white;
      }
    }
    .Bodily{
      position: relative;
      top: -105px;
      width: 100%;
      height: 800px;
      overflow: hidden;
      .Care{
        position: relative;
        top: 0;
        left: 5%;
        width: 90%;
        height: 212px;
        background: white;
        border-radius: 15px;
        .Concerned{
          display: inline-block;
          padding: 60px;
          box-sizing: border-box;
          width: 32%;
          text-align: center;
          line-height: 50px;
          .text{
            color: #6e6e6e;
          }
        }
      }
      .state{
        padding: 25px;
        box-sizing: border-box;
        position: relative;
        top: 41px;
        left: 5%;
        width: 90%;
        height: 264px;
        background: white;
        border-radius: 15px;
        line-height: 70px;
        .payment{
          display: inline-block;
          width: 23%;
          height: 212px;
          text-align: center;
          font-size: 12px;
          span{
            display: inline-block;
            img{
              display: inline-block;
              width: 110px;
              height: 110px;
            }
          }
        }
        .more{
          display: inline-block;
          width: 1%;
          span{
            display: inline-block;
            img{
              display: inline-block;
              width: 30px;
              height: 150px;
            }
          }
        }
      }
      .column{
        padding: 25px;
        box-sizing: border-box;
        position: relative;
        top: 82px;
        left: 5%;
        width: 90%;
        height: 264px;
        background: white;
        border-radius: 15px;
        line-height: 70px;
        overflow: hidden;
        .Bargain{
          display: inline-block;
          width: 23%;
          height: 212px;
          text-align: center;
          font-size: 12px;
          span{
            display: inline-block;
            img{
              display: inline-block;
              width: 110px;
              height: 110px;
            }
          }
        }
        .more{
          display: inline-block;
          width:1%;
        }
      }
    }
    .footer{
      position: relative;
      top: -50px;
      .Guess{
        position: relative;
        top: 0;
        left: 5%;
        text-align: center;
        width: 90%;
      }
      .Guess_left{
        position: absolute;
        top: 0;
        left: 100px;
        display: inline-block;
        width: 250px;
        height: 15px;
        line-height: 15px;
        span{
          width: 250px;
          height: 15px;
          display: inline-block;
          border-bottom: #6e6e6e solid 1px;
        }
      }
      .Guess_center{
        display: inline-block;
        width: 300px;
        height: 16px;
        line-height: 16px;
        color: black;
      }
      .Guess_right{
        position: absolute;
        top: 0;
        right: 110px;
        display: inline-block;
        width: 250px;
        height: 15px;
        line-height: 15px;
        span{
          width: 250px;
          height: 15px;
          display: inline-block;
          border-bottom: #6e6e6e solid 1px;
        }
      }
    }
  }
</style>
