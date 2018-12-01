<template>
  <div id="homeShow">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../../common/img/swiper1.jpg" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="prompt">
      <div><i class="iconfont icon-duigou"></i>网易自营品牌</div>
      <div><i class="iconfont icon-duigou"></i>30天无忧退货</div>
      <div><i class="iconfont icon-duigou"></i>48小时快速退货</div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'

  import 'swiper/dist/css/swiper.min.css'
  export default {

    mounted() {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  #homeShow
    width 100%
    .swiper-container
      width 100%
      height 5.3rem
      .swiper-wrapper
        width 100%
        height 100%
        position relative
        .swiper-slide
          width 100%
          height 5.3rem
          img
            width 100%
            height 100%


</style>
