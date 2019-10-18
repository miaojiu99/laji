<template>
  <div class="address">
    <van-nav-bar title="地址定位" left-arrow @click-left="$router.go(-1)" />

    <van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="北京" />
  <van-cell title="上海" />
  <van-cell title="南京" />

  <van-index-anchor index="B" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
<van-index-anchor index="C" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
<van-index-anchor index="D" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-index-anchor index="E" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-index-anchor index="F" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-index-anchor index="G" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-index-anchor index="H" />
  <van-cell title="北京" />
  <van-cell title="北京" />
  <van-cell title="北京" />
</van-index-bar>

  </div>
</template>

<script>
export default {
  name: "address",
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
.address {
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
  .van-submit-bar{
    baddress-top:1px solid #f1f1f1;

    .van-submit-bar__text{
      text-align: left;
      padding-left: 0.2rem;
    }
  }

}
</style>
