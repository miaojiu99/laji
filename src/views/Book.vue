<template>
  <div class="order">
    <van-nav-bar title="预约上门" left-arrow @click-left="$router.go(-1)" />

    <van-cell title="新增地址" icon="location-o" is-link></van-cell>
    <van-cell title="上门时间" icon="comm iconfont icon-shijian1" is-link></van-cell>
    <van-cell-group>
      <van-cell title="补上门费10元" icon="comm iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-" label="处理旧物成交价高于100元返还上门费用" />
    </van-cell-group>
    <div style="height:10vh;"></div>
    <van-button type="primary" size="large">提交订单</van-button>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      value: 0,
    };
  },

  methods: {
    
    onSubmit(){}
  }
};
</script>

<style lang="scss">
.order {
  width: 100vw;
  min-height: 100vh;
  
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

  .van-button--primary{
    position: fixed;
    bottom: 0;
    border-radius:0;
    
  }

}
</style>
