<template>
  <div class="home">
    <div class="home-add">
      <div class="home-add-in" @click="$router.push('/address')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-location" />
        </svg>
        山东省烟台市芝罘区大海阳15号
      </div>
    </div>

    <div class="home-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/banner1.png" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/banner2.png" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="home-row">
      <van-row>
        <van-col span="6" @click="$router.push('/search')" >
          <img src="@/assets/main1.png" />
          <p>垃圾分类</p>
        </van-col>
        <van-col span="6">
          <img src="@/assets/main2.png" @click="$router.push('/book')" />
          <p>预约清理</p>
        </van-col>
        <van-col span="6">
          <img src="@/assets/main3.png" />
          <p>旧物估价</p>
        </van-col>
        <van-col span="6" @click="$router.push('/serve')" >
          <img src="@/assets/main4.png" />
          <p>旧物处理</p>
        </van-col>
      </van-row>
    </div>
    <div class="home-fenlei">
      <van-row>
        <van-col span="12"><img src="@/assets/ad1.png" /></van-col>
        <van-col span="12"><img src="@/assets/ad2.png" /></van-col>
        <van-col span="12"><img src="@/assets/ad3.png" /></van-col>
        <van-col span="12"><img src="@/assets/ad4.png" /></van-col>
      </van-row>
    </div>
    <div class="home-fenge">
      <img src="@/assets/ad.png" />
    </div>

    <div class="home-tuijian">
      <van-cell title="环保达人" icon="comm iconfont icon-dthb" />
      <ul class="home-daren">
        <li>
          <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="home-drright">
            <div class="home-up">
              <div class="home-name">李大仁</div>
              <div class="home-time">10分钟前预约平台服务</div>
            </div>
            <div class="home-text">成功将垃圾处理成功并变现200元</div>
          </div>
        </li>
        <li>
          <van-image round width="2rem" height="2rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <div class="home-drright">
            <div class="home-up">
              <div class="home-name">李大仁</div>
              <div class="home-time">10分钟前预约平台服务</div>
            </div>
            <div class="home-text">成功将垃圾处理成功并变现200元</div>
          </div>
        </li>
      </ul>
    </div>
      
    <div class="home-footer">
      <van-tabbar v-model="avtive" @abc="sdfsadf">
      <van-tabbar-item icon="comm iconfont icon-shouye" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-pre_icon_yuyuequxian">预约</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-kefu">客服</van-tabbar-item>
      <van-tabbar-item icon="comm iconfont icon-wode1" to="/my">我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      avtive: 0,
      images: '~@/assets/ad.png'
    };
  },

  methods: {
   sdfsadf() {},
   onSearch() {}
  }
};
</script>

<style lang="scss">
.home {
  width: 100vw;
  min-height: 100vh;
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .home-add {
    padding: 2vw 4vw 0;
    color: #333;
    font-size: 0.34rem;

    .home-add-in {
      height: 4vh;
      line-height: 4vh;
      border-radius: 0.8rem;
      background: #f9f9f9;
      border: 1px solid #ccc;

      .icon {
        margin-left: 0.2rem;
      }
    }
  }

  .home-swipe {
    margin: 3vw 4vw;
    border-radius: 0.3rem;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }

  .home-row {
    background: #fff;
    padding: 0.3rem 0;
    text-align: center;

    img {
      width: 40%;
    }
    p {
      font-size: 0.34rem;
      margin: 0.1rem 0;
    }
  }
  .home-fenlei{
    text-align: center;
    padding: 3vw 3vw 0;
    background: #f8f8f8;

    img{
      width: 95%;
    }
  }
  .home-fenge{
    padding: 3vw 4vw;
    background: #f8f8f8;
    img{
      display: block;
      margin: 0;
      width: 100%;
      }
  }

  .home-tuijian{
    padding-bottom: 10vh;
    background: #fff;

    .van-cell{
      color: #000;
      font-weight: bold;
      font-size: 0.4rem;
      .van-cell__left-icon{
        color:#4ccbd4;
      }
    }
    .home-daren{
      li{
        margin: 2vw 4vw;
        padding: 0.2rem;
        border-radius: 0.2rem;
        box-shadow: 0 0 8px 0 #eee;
        height: 2rem;
      }
      .van-image--round{float: left;}

      .home-drright{
        margin-left: 2vw;
        float: left;
        color: #333;
        width: 65vw;
        font-size: 0.34rem;
      }
      .home-up{
        height: 0.8rem;
        line-height: 0.8rem;
        width: 100%;
        margin-top: 0.2rem
      }
      .home-name{
        color: #019ea9;
        float: left;
      }
      .home-time{
        color: #666;
        float: right;
      }
      .home-text{
        line-height: 1rem;
      }
    }
  }
  .van-tabbar-item--active{color:#4ccbd4;font-weight: bold}
}
</style>
