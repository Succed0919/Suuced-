<template>
  <div class="container">
    <div class="container-head">
      <!--轮播图-->
      <div class="container-head-rotationChart">
        <van-swipe :autoplay="3000" indicator-color="white" >
          <van-swipe-item v-for="(val) in Chart" :key="val.id">
            <img :src="val.Chartiamges">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!--搜索框-->
      <div class="container-head-search">
        <img src="./icons/search.png"/>
        <span>玩具</span>
      </div>
      <!--导航栏-->
      <div class="container-head-nav">
        <van-tabs v-model="active">
          <van-tab title="精选">精选</van-tab>
          <van-tab title="食品">食品</van-tab>
          <van-tab title="母婴">母婴</van-tab>
          <van-tab title="家居">家居</van-tab>
          <van-tab title="女装">女装</van-tab>
          <van-tab title="生鲜">生鲜</van-tab>
          <van-tab title="百货">百货</van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="container-app">
      <div class="container-app-activity">
        <img src="./banner/155921683498601203.png" alt="" class="left">
        <img src="./banner/155921685876387844.png" alt="" class="right">
      </div>
      <div class="container-app-function">
        <div class="container-app-link">
          <img src="./icons/155745615565685465.png" alt="">
          <p>每日签到</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155745620576685615.png" alt="">
          <p>一元邀新</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155745633201413553.png" alt="">
          <p>砍价团</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155745634336643149.png" alt="">
          <p>一分好礼</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155367739181460729.png" alt="">
          <p>拼购国际</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155849473466877746.png" alt="">
          <p>8.8包邮</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155745638811844821.png" alt="">
          <p>食品超市</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155911181443788272.gif" alt="">
          <p>母婴馆</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155298317461154674.png" alt="">
          <p>生活家电</p>
        </div>
        <div class="container-app-link">
          <img src="./icons/155745636672018807.png" alt="">
          <p>特色馆</p>
        </div>
      </div>
      <div class=" app-body_commodity-1">
        <!--今日必拼-->
        <div class="container-app-assemble">
          <div class="left">
            <img src="./icons/flash.png" alt="">
            <span class="spell">今日必拼</span>
          </div>
          <div class="right">
            <span class="more">更多</span>
            <img src="./icons/goToday.png" alt="">
          </div>
          <van-swipe :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(item) in List" :key="item.id">
              <div class="app-body_commodity" v-for="(item) in List" :key="item.id">
                <img class="CommodityImg">
                <div class="CommodityContent">
                  <span class="CommodityContent_Title">{{item.title}}</span>
                  <p class="CommodityContent_Meaning">{{item.Meaning}}</p>
                  <span class="CommodityContent_Subsidy"></span>
                  <span class="CommodityContent_Original"></span><br>
                  <span class="CommodityContent_btn"></span>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!--热卖榜-->
        <div class="container-app-bestSellers">
          <div class="title">
            <img src="./icons/ranking.png" alt="">
            <span>热卖榜</span>
          </div>
        </div>
        <div class="Commodity_content">
          <div class="pictures" v-for="(pictures) in Content" :key="pictures.id">
            <img :src="pictures.Cobtentiamges">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-named-as-default
import require from '../../mock/index';

export default {
  name: 'index',
  data() {
    return {
      active: 2,
      Chart: '',
      List: '',
      Content: '',
    };
  },
  created() {
    require.Chart(this.Chart)
      .then((res) => {
        this.Chart = res.data.data;
        // eslint-disable-next-line no-console
        console.log(res.data.data);
      }).catch();
    require.getindex(this.List)
      .then((res) => {
        this.List = res.data.data;
      }).catch();
    require.Content(this.Content)
      .then((res) => {
        this.Content = res.data.data;
        // eslint-disable-next-line no-console
        console.log(res.data.data);
      }).catch();
  },
};
</script>

<style scoped lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    /*头部 */
    .container-head{
      /* 搜索框 */
      .container-head-search{
        position: absolute;
        top: 0;
        padding: 10px 0;
        background: #fff;
        width: 90%;
        height: 60px;
        border-radius: 50px;
        margin: 12px 5%;
        text-align: center;
        img{
          width: 50px;
          margin-right: 15px;
          display: inline-block;
          vertical-align: middle;
        }
        span{
          font-size: 30px;
          color: #b0b0b0;
          display: inline-block;
          vertical-align: middle;
        }
      }
      //导航栏
      .container-head-nav{
        width: 100%;
        height: 80px;
        position: absolute;
        top: 104px;
      }
    }
    .container-app{
      width: 100%;
      overflow: hidden;
      background: #f2f2f2;
      .container-app-activity {
        width: 100%;
        height: 300px;
        font-size: 0;
        .left {
          width: 50%;
          height: 300px;
          cursor: pointer;
          overflow-x: auto;
          overflow-y: visible;
          animation: animatedBackground 2.5s .15s ease-in-out infinite;
          @-webkit-keyframes animatedBackground {
            0% {
              transform: rotateY(-30deg);
              transform-origin: right center;
            }
            50% {
              transform: rotateY(-15deg);
              transform-origin: right center;
            }
            100% {
              transform: rotateY(0deg);
              transform-origin: right center;
            }
          }
        }
        .right {
          width: 50%;
          height: 300px;
          cursor: pointer;
          overflow-x: auto;
          overflow-y: visible;
          animation: right 2.5s .15s ease-in infinite;
          @-webkit-keyframes right {
            0% {
              transform: rotateY(-30deg);
              transform-origin: left center;
            }
            50% {
              transform: rotateY(-15deg);
              transform-origin: left center;
            }
            100% {
              transform: rotateY(0deg);
              transform-origin: left center;
            }
          }
        }
      }
      .container-app-function{
        background: #ffffff;
        width: 90%;
        margin: 0 auto;
        border-radius: 30px;
      }
      .container-app-link{
        margin-top: 20px;
        width: 18.6%;
        display: inline-block;
        text-align: center;
        img{
          width: 80px;
        }
        p{
          color: #6e6e6e;
          font-size: 20px;
        }
      }
    }
    .app-body_commodity-1{
      /*今日必拼*/
      .container-app-assemble{
        width: 90%;
        background: white;
        border-top-left-radius: 30px;
        border-top-right-radius: 30px;
        margin: 10px auto;
        .left{
          display: inline-block;
          vertical-align: middle;
          width: 78%;
          position: relative;
          left: 50px;
          top: 30px;
          img{
            width: 30px;
            display: inline-block;
            vertical-align: middle;
          }
          .spell{
            display: inline-block;
            vertical-align: middle;
            font-size: 30px;
            color: #4f4f4f;
          }
        }
        .right{
          display: inline-block;
          vertical-align: middle;
          width: 11%;
          position: relative;
          right: 0;
          top: 30px;
          img{
            width: 30px;
            display: inline-block;
            vertical-align: middle;
          }
          .more{
            text-align: right;
            font-size: 20px;
            color: #7f7f7f;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .Commodity {
          display: inline-block;
          width: 10rem;
          background: white;
          position: relative;
          overflow: hidden;
          .CommodityImg {
          }
          .CommodityContent {
            display: inline-block;
            .CommodityContent_Title {
            }
            .CommodityContent_Meaning {
            }
            .CommodityContent_Price {
            }
            .CommodityContent_Subsidy {
            }
            .CommodityContent_Original {
            }
            .CommodityContent_btn {
            }
          }
        }
      }
      /*热卖榜*/
      .container-app-bestSellers{
        width: 90%;
        background: white;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        margin: 0 auto;
        overflow: hidden;
        .title{
          img{
            margin-left: 10px;
            width: 30px;
            display: inline-block;
            vertical-align: middle;
          }
          span{
            text-align: right;
            font-size: 30px;
            color: #4b4b4b;
            display: inline-block;
            vertical-align: middle;
          }
        }
        .Commodity_content{
          width: 90%;
          height: 500px;
          border: salmon solid 1px;
          overflow: hidden;
          .pictures{
            display: inline-block;
            width: 28%;
            height: 441px;
            border: red solid 1px;
            img{
              display: inline-block;
              width: 300px;
              height: 300px;
            }
          }
        }
      }
    }
  }
</style>
