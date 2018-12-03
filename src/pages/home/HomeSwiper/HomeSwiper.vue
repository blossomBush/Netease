<!--Home轮播图-->
<template>
  <div id="homeShow">
    <div class="swiper-container">
      <div class="swiper-wrapper" ref="swiper" >
        <div class="swiper-slide" v-for="item in homeData.focusList" :key="item.id">
          <img :src="item.picUrl" alt="">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="prompt">
      <div>
        <i class="iconfont icon-duigou"></i>
        <span>网易自营品牌</span>
      </div>
      <div>
        <i class="iconfont icon-duigou"></i>
        <span>30天无忧退货</span>
      </div>
      <div>
        <i class="iconfont icon-duigou"></i>
        <span>48小时快速退货</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {

    mounted() {
      new Swiper ('.swiper-container',{
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      })
    },
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"

  #homeShow
    width 100%
    background: #fff
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
    .prompt
      width 100%
      height 0.8rem
      display flex
      justify-content space-around
      align-items center
      margin-bottom 10px
      div
        font-size 12px
        i
          color:#b4282d;
</style>
