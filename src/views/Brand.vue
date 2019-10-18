<template>
  <div class="brand">
    <van-nav-bar title="冰箱估价" left-arrow @click-left="$router.go(-1)" />

    <div class="brand-current">
      <van-cell title="品牌" icon="comm iconfont icon-fensuijipinpaidaquan" />
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/7912781bcb9bf7e0580dc78610616748_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ecmb.bdimg.com/tam-ogel/4409aa8aa057a032b726672e1f44be31_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/447480221f376151f576c2d9e738938c_fullsize.jpg@s_1,w_484,h_484" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2022339373,598390785&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=bcfc031f8d7824b0ec304e94e126f9c8" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2022339373,598390785&fm=74&app=80&f=PNG&size=f121,121?sec=1880279984&t=bcfc031f8d7824b0ec304e94e126f9c8" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/7912781bcb9bf7e0580dc78610616748_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ecmb.bdimg.com/tam-ogel/4409aa8aa057a032b726672e1f44be31_121_121.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://ss3.bdstatic.com/yrwDcj7w0QhBkMak8IuT_XF5ehU5bvGh7c50/logopic/447480221f376151f576c2d9e738938c_fullsize.jpg@s_1,w_484,h_484" />
        </van-grid-item>
      </van-grid>

    </div>
    <div class="brand-current">
      <van-cell title="购买日期" icon="comm iconfont icon-shijian" />


    </div>
    <div class="brand-current">
      <van-cell title="保修期" icon="comm iconfont icon-baoxiu" />
      <van-radio-group v-model="radio" class="clearfix">
        <van-radio name="1">在保</van-radio>
        <van-radio name="2">过保</van-radio>
      </van-radio-group>

    </div>
    <div class="brand-current">
      <van-cell title="功能用况" icon="comm iconfont icon-yanjizhushou-shangchuan_anjiangongneng" />


    </div>
    <div class="brand-current">
      <van-cell title="外观" icon="comm iconfont icon-yanjizhushou-shangchuan_pingmuwaiguan" />
      <van-uploader v-model="fileList" multiple :min-count="10"/>
      <p style="font-size:0.34rem;">请将正侧上下面及内部如实拍摄，不少于10张。</p>
    </div>
      
    <div style="height:10vh;"></div>
    <van-button type="primary" size="large">确认估价</van-button>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      radio: '1'
    }
    
  },

  methods: {
    
  }
};
</script>

<style lang="scss">
.brand {
  width: 100vw;
  min-height: 100vh;
  background: #f9f9f9;
  .clearfix { *zoom: 1;}
  .clearfix:before,
  .clearfix:after { display: table; line-height: 0; content: "";}
  .clearfix:after {clear: both;}
  .clear{clear: both;}
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .brand-current{
    background: #fff;
    padding: 2vw 4vw;
    margin-bottom: 2vw;

    .van-cell{padding: 0;margin-bottom: 0.2rem}
    .van-grid-item__content{padding: 8px;}
    .van-image{
      border-radius: 2rem;
      border: 1px solid #bbdbff;
      overflow: hidden;
    }
    
  }
  .van-radio-group{
      width: 60vw;
      margin: auto;
      border: 1px solid #ccc;
      border-radius: 0.2rem;

      .van-radio{
        width: 30vw;
        float: left;
        padding: 0.3rem 0;
        text-align: center;
      }
      .van-radio__label{
        font-size: 0.34rem;
      }
      .van-icon{display: none;}
      .van-radio__label{
        margin: auto;
      }
    }
  .van-button--primary{
    position: fixed;
    bottom: 0;
    border-radius:0;
    
  }
}
</style>
